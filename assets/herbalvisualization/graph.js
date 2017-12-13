//Filter products based on brand Vida Beauty
vida_beauty_products_data = rawData.filter(function(product){
    return product.brand === "Vida Beauty"
})

vasia_beauty_products_data = rawData.filter(function(product){
    return product.brand === "Vasia"
})

almas_beauty_products_data = rawData.filter(function(product){
    return product.brand === "Almas"
})

dherbs_beauty_products_data = rawData.filter(function(product){
    return product.brand === "D'Herbs"
})

jamujelita_beauty_products_data = rawData.filter(function(product){
    return product.brand === "Jamu Jelita"
})

duniaherbs_beauty_products_data = rawData.filter(function(product){
    return product.brand === "Dunia Herbs"
})
//Filter products based on Healthcare category
healthcare_products_data = rawData.filter(function(product){
    return product.category === "Healthcare"
})

haircare_products_data = rawData.filter(function(product){
    return product.category === "Hair Care"
})

slimming_products_data = rawData.filter(function(product){
    return product.category === "Slimming"
})

womenhealth_products_data = rawData.filter(function(product){
    return product.category === "Women's Health"
})
menhealth_products_data = rawData.filter(function(product){
    return product.category === "Men's Health"
})

//Filter products that uses Manjakani
manjakani_products_data = rawData.filter(function(product){
    return product.ingredients.indexOf('Manjakani') !== -1
})

//Filter the first three products with 'Jamu' in their names
first_three_jus_products_data = rawData.filter(function(product){
    return product.name.indexOf('Jus') !== -1;
}).slice(0,3);


//Create new Graph on page loads
var graph = new GraphBuilder({
    el: 'body',
    data: rawData, //FOR TESTING : Replace with any of the above for filtering or create a new one and use it here
    diameter: 960,
    rect_width: 180,
    rect_height: 19,
    link_width: "1px"
})

function allCat()
{
    graph.refresh(rawData);
}

function healthcare()
{
    graph.refresh(healthcare_products_data);
}
function haircare()
{
    graph.refresh(haircare_products_data);
}
function slimming()
{
    graph.refresh(slimming_products_data);
}
function womenhealth()
{
    graph.refresh(womenhealth_products_data);
}
function menhealth()
{
    graph.refresh(menhealth_products_data);
}
function vidabeauty()
{
    graph.refresh(vida_beauty_products_data);
}
function vasia()
{
    graph.refresh(vasia_beauty_products_data);
}
function almas()
{
    graph.refresh(almas_beauty_products_data);
}
function dherbs()
{
    graph.refresh(dherbs_beauty_products_data);
}
function jamujelita()
{
    graph.refresh(jamujelita_beauty_products_data);
}
function duniaherbs()
{
    graph.refresh(duniaherbs_beauty_products_data);
}