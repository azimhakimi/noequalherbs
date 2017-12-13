window.GraphBuilder = (function (config) {

    this.init = function (config) {
        this.data = config.data ? config.data : (new Error('Data provided for graph, cannot be empty'));

        if (this.data instanceof Error)
            throw this.data;

        this.el = config.el ? config.el : 'body';
        this.diameter = config.diameter ? config.diameter : 960;
        this.rect_width = config.rect_width ? config.rect_width : 180;
        this.rect_height = config.rect_height ? config.rect_height : 19;
        this.link_width = config.link_width ? config.link_width : "1px";
    }

    this.build = function () {
        this.processData(this.data);
        this.sortData(this.data);
        this.initializeGraph(this.data);
        this.buildGraph(this.data);
    }

    this.refresh = function (data) {
        this.data = data;
        this.links.selectAll('.link').remove();
        this.onodes.selectAll('.outer_node').remove();
        this.inodes.selectAll('.inner_node').remove();
        this.build();
    }

    this.processData = function (data) {
        var outer = d3.map();
        var inner = [];
        var links = [];
        var outerId = [0], outerId2 = [0];
        var o = null, l = null;

        data.forEach(function (product) {
            if (product == null)
                return;

            i = { id: 'i' + inner.length, name: product.name, related_links: [] };
            i.related_nodes = [i.id];
            inner.push(i);

            if (!Array.isArray(product.ingredients))
                ingredients = [product.ingredients];
            else
                ingredients = product.ingredients;

            ingredients.forEach(function (ingredient, index) {

                o = outer.get(ingredient);

                if (o == null) {
                    o = { name: ingredient, id: 'o-ing' + outerId[0], related_links: [], type: 'ingredient' };
                    o.related_nodes = [o.id];
                    outerId[0] = outerId[0] + 1;

                    outer.set(ingredient, o);
                }

                // create the links
                l = { id: 'l-' + i.id + '-' + o.id, inner: i, outer: o }
                links.push(l);

                // and the relationships
                i.related_nodes.push(o.id);
                i.related_links.push(l.id);
                o.related_nodes.push(i.id);
                o.related_links.push(l.id);
            });

            if (!Array.isArray(product.cures))
                cures = [product.cures];
            else
                cures = product.cures;

            cures.forEach(function (cure, index) {

                o = outer.get(cure);

                if (o == null) {
                    o = { name: cure, id: 'o-cure' + outerId2[0], related_links: [], type: 'cure' };
                    o.related_nodes = [o.id];
                    outerId2[0] = outerId2[0] + 1;

                    outer.set(cure, o);
                }

                // create the links
                l = { id: 'l-' + i.id + '-' + o.id, inner: i, outer: o }
                links.push(l);

                // and the relationships
                i.related_nodes.push(o.id);
                i.related_links.push(l.id);
                o.related_nodes.push(i.id);
                o.related_links.push(l.id);
            });
        });

        this.data = {
            inner: inner,
            outer: outer.values(),
            links: links
        }
    }

    this.sortData = function (data) {
        var outer = data.outer;
        data.outer = Array(outer.length);
        var i1 = 0;
        var i2 = outer.length - 1;

        for (var i = 0; i < data.outer.length; ++i) {
            if (i % 2 == 1)
                data.outer[i2--] = outer[i];
            else
                data.outer[i1++] = outer[i];
        }

        this.data = data;
    }

    this.initializeGraph = function (data) {
        var diameter = this.diameter;
        var rect_width = this.rect_width;
        var rect_height = this.rect_height;
        var il = data.inner.length;
        var ol = data.outer.length;

        var inner_y = d3.scale.linear()
            .domain([0, il])
            .range([-(il * rect_height) / 2, (il * rect_height) / 2]);

        mid = (data.outer.length / 2.0)
        var outer_x = d3.scale.linear()
            .domain([0, mid, mid, data.outer.length])
            .range([15, 170, 190, 355]);

        var outer_y = d3.scale.linear()
            .domain([0, data.outer.length])
            .range([0, diameter / 2 - 120]);


        // setup positioning
        data.outer = data.outer.map(function (d, i) {
            d.x = outer_x(i);
            d.y = diameter / 2;
            return d;
        });

        data.inner = data.inner.map(function (d, i) {
            d.x = -(rect_width / 2);
            d.y = inner_y(i);
            return d;
        });
        this.data = data;
    }

    this.buildGraph = function (data) {
        var diameter = this.diameter;
        var rect_width = this.rect_width;
        var rect_height = this.rect_height;
        var self = this;
        var diagonal = d3.svg.diagonal()
            .source(function (d) {
                return {
                    "x": d.outer.y * Math.cos(self.projectX(d.outer.x)),
                    "y": -d.outer.y * Math.sin(self.projectX(d.outer.x))
                };
            })
            .target(function (d) {
                return {
                    "x": d.inner.y + rect_height / 2,
                    "y": d.outer.x > 180 ? d.inner.x : d.inner.x + rect_width
                };
            })
            .projection(function (d) { return [d.y, d.x]; });

        if (!this.svg) {
            this.svg = d3.select(this.el).append("svg")
                .attr("width", '1500')
                .attr("height", '1400')
                .attr('class', 'graph-container')
                .append("g")
                .attr('class', 'graph')
                .attr("transform", "translate(" + ((diameter / 2) + 250) + "," + ((diameter / 2) + 250) + ")");
            this.links = this.svg.append('g').attr('class', 'links');
            this.onodes = this.svg.append('g');
            this.inodes = this.svg.append('g');
        }



        // links
        var link = this.links.selectAll(".link")
            .data(data.links);

        var linkEnter = link.enter().append('path')
            .attr('class', function (d) {
                return 'link ' + d.outer.type;
            })
            .attr('id', function (d) { return d.id })
            .attr("d", diagonal)
            .attr('stroke-width', this.link_width);

        // Outer nodes
        var onode = this.onodes.selectAll(".outer_node")
            .data(data.outer);

        var onodeEnter = onode.enter().append("g")
            .attr("class", function (d) {
                return 'outer_node ' + d.type;
            })
            .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
            .on("mouseover", this.mouseover)
            .on("mouseout", this.mouseout);

        onodeEnter.append("circle")
            .attr('id', function (d) { return d.id })
            .attr("r", 3);

        onodeEnter.append("circle")
            .attr('r', 20)
            .attr('visibility', 'hidden');

        onodeEnter.append("text")
            .attr('id', function (d) { return d.id + '-txt'; })
            .attr("dy", ".31em")
            .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
            .attr("transform", function (d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
            .text(function (d) { return d.name; });

        // inner nodes
        var inode = this.inodes.selectAll(".inner_node")
            .data(data.inner);

        var inodeEnter = inode.enter().append("g")
            .attr("class", "inner_node")
            .attr("transform", function (d, i) { return "translate(" + d.x + "," + d.y + ")" })
            .on("mouseover", this.mouseover)
            .on("mouseout", this.mouseout);

        inodeEnter.append('rect')
            .attr('width', rect_width)
            .attr('height', rect_height)
            .attr('id', function (d) { return d.id; });

        inodeEnter.append("text")
            .attr('id', function (d) { return d.id + '-txt'; })
            .attr('text-anchor', 'middle')
            .attr("transform", "translate(" + rect_width / 2 + ", " + rect_height * .75 + ")")
            .text(function (d) { return d.name; });

        link.exit().remove();
        onode.exit().remove();
        inode.exit().remove();

        d3.select(self.frameElement).style("height", diameter - 150 + "px");
    }

    this.projectX = function (x) {
        return ((x - 90) / 180 * Math.PI) - (Math.PI / 2);
    }

    this.mouseover = function (d) {
        // bring to front
        d3.selectAll('.links .link').sort(function (a, b) { return d.related_links.indexOf(a.id); });

        for (var i = 0; i < d.related_nodes.length; i++) {
            d3.select('#' + d.related_nodes[i]).classed('highlight', true);
            d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'bold');
        }

        for (var i = 0; i < d.related_links.length; i++) {
            d3.select('#' + d.related_links[i]).classed('highlight2', true);
            d3.select('#' + d.related_links[i]).attr('stroke-width', '3px');
        }
    }

    this.mouseout = function (d) {
        for (var i = 0; i < d.related_nodes.length; i++) {
            d3.select('#' + d.related_nodes[i]).classed('highlight', false);
            d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'normal');
        }

        for (var i = 0; i < d.related_links.length; i++) {
            d3.select('#' + d.related_links[i]).classed('highlight2', false);
            d3.select('#' + d.related_links[i]).attr('stroke-width', this.link_width);
        }
    }

    //Called on construct
    this.init(config)
    this.build()
});