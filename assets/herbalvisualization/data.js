var rawData = [
	{
		"brand": "Almas",
		"category": "Healthcare",
		"name": "Gamolex Gold",
		"ingredients": "Cranberries, Tribulus, Roselle, Appricot, Acai Berry, Zaffaran, Bird Nest, Mangoosten, Aloe Vera, Sea Cucumber, Dates, Pomegranate",
		"cures": "Stroke, Gastric, Ulcer, Heel Skin Cracked, Menstrual Cycle, Women's Internal, Scars, Dry Lips, Increase Face Beauty, Nourish Hair, Control Blood Pressure, Diabetes"
	},
	{
		"brand": "Almas",
		"category": "Slimming",
		"name": "Fiber Fantasi",
		"ingredients": "Peach, Apple Fiber, Senna, Tribulus, Green Tea",
		"cures": "Avoid hungry, Helps digestion problems, Skin tightening, Skin whitening, Regulates weight, Increase body fitness, Solve constipation problems, Reduce weight, Helps diet"
	},
	{
		"brand": "Almas",
		"category": "Men's Health",
		"name": "Jus Arjuna Maxx",
		"ingredients": "Butea, Acai Berry, Goji Berry, Tongkat ali, Habatussauda, Ginseng, Raisins, Ashwagandha, Misai kucing, Saw palmetto",
		"cures": "Men's Internal"
	},
	{
		"brand": "Almas",
		"category": "Women's Health",
		"name": "Jus Perawan Gold",
		"ingredients": "Kacip Fatimah, Manjakani, Pueraria Mirifica, Acai Berry, Dates, Honey, Roselle, Pomegranate",
		"cures": "Women's Internal"
	},
	{
		"brand": "D'Herbs",
		"category": "Skincare",
		"name": "Glow B White",
		"ingredients": "Bird Nest, Acai Berry, Aloe Vera, Goji",
		"cures": "Repairing epidermal structure, Skin Thickening, Impregnating fine lines, Antioxidants, Heals skin inflammation, Treating burns, Promoting metabolism, Skin elasticity"
	},
	{
		"brand": "D'Herbs",
		"category": "Healthcare",
		"name": "Kopi Nikmat",
		"ingredients": "Brazil Coffee, Hazelnut, Honey, Apricot, Ginseng, Goji, Acai Berry",
		"cures": "Increase body fitness,  Improve blood circulation, Remove toxins, Stabilize blood pressure, Maintain nervous system, Strengthen bones, Strengthen muscle"
	},
	{
		"brand": "D'Herbs",
		"category": "Hair Care",
		"name": "Krim Super Lebat",
		"ingredients": "Olives , Spirulina, Morinda, Hibiscus, Virgin Coconut Oil",
		"cures": "Maintain natural black hair, Supply oxygen to hair, Avoid hair loss, Hair Thickening, Anti-dandruff"
	},
	{
		"brand": "D'Herbs",
		"category": "Skincare",
		"name": "Mukjizat Herbal Soap",
		"ingredients": "Cinnamon Bark, Clove",
		"cures": "Solve skin problems"
	},
	{
		"brand": "D'Herbs",
		"category": "Women's Health",
		"name": "Perawan Herbal Wash",
		"ingredients": "Kacip Fatimah, Betel, Manjakani",
		"cures": "Cleaning women's internal"
	},
	{
		"brand": "D'Herbs",
		"category": "Hair Care",
		"name": "Shampoo Super Lebat",
		"ingredients": "Hibiscus, Virgin Coconut Oil, Olive Oil, Spirulina, Morinda, Citrus",
		"cures": "Maintain natural black hair, Daily shampoo, Supply oxygen to hair, Avoid hair loss, Avoid hair graying, Anti-dandruff,  Hair Thickening"
	},
	{
		"brand": "D'Herbs",
		"category": "Skincare",
		"name": "Gel Mandian Aura 7 Bunga",
		"ingredients": "Aloe Vera, Coconut Oil, Mint Leaves, Sunflower, Hibiscus, Rose, Jasmine, Orchid, Lavender, Ylang-ylang",
		"cures": "Removes skin impurities, Remove dead skin cells, Skin moisturising, Skin smoothness, Skin elasticity, Maintain rejuvenation skin, Shrinks pores, Heals skin inflammation, Body scent"
	},
	{
		"brand": "Vasia",
		"category": "Healthcare",
		"name": "Platinum Drink",
		"ingredients": "Maquiberry, Pomegranate, Morinda, Blueberry, Acai Berry, Goji Berri, Mangosteen, Prune, Lingzhi, Tumeric, Raisins, Zingiber Officinale, Tomatoes, Camu Berry, Pear, Passionfruit, Halba, Roselle, Apricot, Garlic, Papaya, Kiwi, Cranberry, Alfalfa, Cinnamon, Green Apple, Honey, Habbatus Sauda, Cordyceps, Aronia, Orange, Figs, Java Ginger, Peria, Spirulina, Grapes, Sabah Snake Grass, Lychee, Ginseng, Olive Oil, Cekur Root, Clove, Misai Kucing, Acerola Cerry, Seaweed, Aloe Vera, Bilberry, Dong Quai, Saffron, Green Tea Leaves",
		"cures": "Antioxidant, Prevent cancer, Control blood pressure, Control cholesterol level, Avoid kidney problems, Treating skin, Avoid hair loss, Avoid hair graying, Enhance stamina, Overcome dysmenorrhea"
	},
	{
		"brand": "D'Herbs",
		"category": "Skincare",
		"name": "Herbal Lightening Soap",
		"ingredients": "Jojoba, Lime Blossom, Aloe Vera, Ginkgo Biloba, Papaya, Myrtle, Avokado, Cucumber",
		"cures": "Skin moisturising, Skin whitening, Skin elasticity, Shrinks pores, Maintain skin rejuvenation, Eliminates makeup effect, Remove dead skin cells, Remove oils"
	},
	{
		"brand": "D'Herbs",
		"category": "Skincare",
		"name": "Advance White",
		"ingredients": "Grapes, Tomato, Kulit Kayu Pain, Acerola Cerry, Citric Acid, Orange, Lime",
		"cures": "Skin whitening, Skin elasticity, Skin smoothness, Skin moisturising, Maintain skin rejuvenation, Prevent aging process, Remove toxin"
	},
	{
		"brand": "D'Herbs",
		"category": "Hair Care",
		"name": "Syampu Ikalurus",
		"ingredients": "Olive oil, Ginseng, Ginkgo Biloba, Salvia Sclarea, Hibiscus",
		"cures": "Maintain hair health, Hair shining, Strengthen hair, Hair thicken, Increase hair growth, Avoid itching of the scalp, Anti-dandruff, Avoid hair loss, Avoid hair brancing"
	},
	{
		"brand": "Dunia Herbs",
		"category": "Hair Care",
		"name": "Gel Rambut Uban dan Lebat",
		"ingredients": "Henna, Olive, Argan Fruit, Jojoba, Macadamia",
		"cures": "Maintain natural black hair, Nourish hair, Hair Straightening, Hair Smootness, Anti dandruff, Hair shining, Avoid dry hair, Avoid rough hair, Avoid unhealthy hair"
	},
	{
		"brand": "Jamu Jelita",
		"category": "Slimming",
		"name": "Sabun Panas Herba",
		"ingredients": "Capsicum, Lemongrass, Ginger, Lime, Centella, Cinnamon",
		"cures": "Reduce cellulite, Removes skin impurities, Remove dead skin cells, Remove toxin, Avoid abdominal disorders, Burn fat, Improve blood circulation"
	},
	{
		"brand": "Jamu Jelita",
		"category": "Slimming",
		"name": "Fiber Coffee",
		"ingredients": "Garcinia Cambogia, Hoodia Gordonii, Green Coffee, White Kidney Beans, Coffee, Coco",
		"cures": "Reduce weight, Increase metabolism, Helps digestion problems, Increase fat burn rate, Increase calories burn rate, Slimming body"
	},
	{
		"brand": "Jamu JelitaHair Care",
		"category": "Women's Health",
		"name": "Rapat Seri V'asia",
		"ingredients": "Plum, Serapat Root, Manjakani, Kacip Fatimah, Melastoma, Tumeric, Habbatus Sauda, Betel, Pinang Fruit",
		"cures": "Remove toxins, Women's internal, Enhance vagina muscles, Overcoming unpleasant odor problems on intimate parts, Stabilize blood pressure, Improve blood circulation"
	},
	{
		"brand": "Vasia",
		"category": "Women's Health",
		"name": "Payu Maxx",
		"ingredients": "Mango, Peach, Pueraria Mirifica, Pueraria Lobata, Manjakani, Betel, Pinang Fruit, Tumeric, Habbatus Sauda",
		"cures": "Increase breast size, Increase breast elasticity, Whitening breast, Overcome scarring, Overcome wrinkles,  Impregnating fine line, Maintain skin rejunevation"
	},
	{
		"brand": "Vasia",
		"category": "Men's Health",
		"name": "Perfect Man",
		"ingredients": "Tongkat Ali, Butea Superba, Ginkgo Biloba, Tribulus Terrestris, Passionfruit, Citric Acid, Ashwagandha, Promaganate, Garcinia Cambogia, Horny Goat Weed, Maca Fruit, Saw Palmetto",
		"cures": "Increase body fitness, Stimulates energy, Stimulates sexual ability, Increase penis size, Overcome fertility problems, Increase sperm quality"
	},
	{
		"brand": "Vida Beauty",
		"category": "Healthcare",
		"name": "Pamoga",
		"ingredients": "Gamat, Promegranate, Chlorella",
		"cures": "Increase stamina, Increase body fitness, Disease infections protection, Control Cholesterol Level, Control blood sugar, Strengthen Muscle, Maintain healthy skin, Maintain healthy hair Heals skin inflammation, Prevents aging process"
	},
	{
		"brand": "Vasia",
		"category": "Healthcare",
		"name": "Jus Nusantara",
		"ingredients": "Pomegranate, Honey, Dates, Habbatus Sauda, Java Ginger, Zingiber Officinale, Cekur Root, Tumeric, Halba, Clove Flower, Cinnamon, Black Pepper",
		"cures": "Increase body fitness, Control cholesterol level, Control blood sugar, Stabilize blood pressure, Relieve muscle pain, Provide energy, Treats wounds, Enhance immune system,  Women's internal"
	},
	{
		"brand": "Vasia",
		"category": "Healthcare",
		"name": "Jus Kasih Sayang",
		"ingredients": "Pomegranate, Honey, Dates, Manjakani, Kacip Fatimah, Serapat Wood , Zingiber Officinale, Pueraria Mirifica, Acai Berry, Horny Goat Weed, Betel, Black Cohosh, Tumeric, Habbatus Sauda, Za'faran",
		"cures": "Increase body fitness, Women's internal, Skin elasticity, Maintain skin rejuvenation, Nourish womb, Improve blood circulation, Strengthen vagina muscles, Enhance immune system"
	},
	{
		"brand": "Vasia",
		"category": "Healthcare",
		"name": "Jamu Sri Dara",
		"ingredients": "Manjakani, Helicteres Isora, Hippocratea Indica, Coriander seeds, Java Chilli",
		"cures": "Women's internal, Protect estrogen hormone, Avoid menstruation problems, Strengthen vagina tissue, Maintain womb health, Remove toxin, Avoid muscle pain"
	},
	{
		"brand": "Vasia",
		"category": "Healthcare",
		"name": "Almas Cafe",
		"ingredients": "Coffee, Potato, Guarana, Cordyceps",
		"cures": "Generate optimum fitness level, Overcome fatigue, Body refreshment, Remove toxin, Prevent cancer, Increase metabolism, Strengthen immune system, Control cholesterol level"
	},
	{
		"brand": "Vasia",
		"category": "Hair Care",
		"name": "Krim Mahkota Rambut Berherba",
		"ingredients": "Charcoal Powder, Papaya, Colagen, Neel Leaves",
		"cures": "Repair damage hair, Hair smoothness, Maintain hair health, Nourish hair, Strengthen hair, Anti-dandruff, Avoid hair graying, Hair moisturizing"
	},
	{
		"brand": "Vasia",
		"category": "Hair Care",
		"name": "Pati Ibu Syampu",
		"ingredients": "Neel Leaves, Gamat, Aloe Vera, Charcoal Powder, Papaya",
		"cures": "Remove hair impurities, Repair damage hair, Hair smoothness,  Maintain healthy hair, Hair moisturizing, Strengthen hair, Anti-dandruff, Avoid itching of the scalp, Highlight hair color, Avoid hair graying, Protect scalp"
	},
	{
		"brand": "Vasia",
		"category": "Slimming",
		"name": "Jamu Rampina",
		"ingredients": "Aloe Vera, Senna Leaves, Mandarin Lime, Rice Red YIS, Hawthorn, Garcinia Cambogia",
		"cures": "Reduce weight, Burn fat, Slimming body, Avoid abdominal disorders, Control eat appetite, Remove toxin, Solve constipation problems, Helps digestion problems, Skin elasticity"
	},
	{
		"brand": "Vasia",
		"category": "Slimming",
		"name": "Losyen Panas Asli",
		"ingredients": "Olive, Beeswax, Lime, Gamat, Aloe Vera, Tumeric, Lemongrass, Algae, Centella",
		"cures": "Reduce skin inflammation, Reduce joint pain, Reduce muscle pain, Reduce cellulite, Skin smoothness, Remove toxin, Avoid abdominal disorders, Improve blood circulation, Body refreshment, Helps digestion problems"
	},
	{
		"brand": "Dunia Herbs",
		"category": "Healthcare",
		"name": "Mustajab Gold",
		"ingredients": "Sabah Snake Grass, Soursop Leaves, Pomegranate, Halba, Fennel, Dry Apricot, Dates, Habbatus Sauda, Garlic, Figs, Centella, Almanna Gum, Ginger",
		"cures": "Control Blood Pressure, Prevent cancer, Control cholesterol level, Diabetes, Provide energy, Enhance immune system, Remove toxin, Control eat appetite, Improve blood circulation, Prevent headache, Protect intestine,  Protect heart, Reduce uric acid, Protect kidneys"
	}
];

rawData.forEach(function(product){
	if(!Array.isArray(product.ingredients)){
		product.ingredients = product.ingredients.split(',').map(function (ingredient) {
			return ingredient.trim();
		});
	}
		
	if(!Array.isArray(product.cures)){
		product.cures = product.cures.split(',').map(function (ingredient) {
			return ingredient.trim();
		});
	}
});