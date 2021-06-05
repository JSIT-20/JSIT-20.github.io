	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
 
var products = [
	{
		name: "brocoli",
		lactose: true,
		noix: true, 
		price: 1.99,
		organic: true,
		imgSrc: "https://sob-prd-cdn-products.azureedge.net/media/image/product/fr/medium/0000000094060.jpg"
	},
	{
		name: "pain",
		lactose: true,
		noix: true,
		price: 2.35,
		organic: true,
		imgSrc: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/4:3/w_3004,h_2253,c_limit/milk-bread.jpg"
	},
	{
		name: "salmon",
		lactose: true,
		noix: true,
		price: 10.00,
		organic: true,
		imgSrc: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1260616200/61ec4d69-2693-4f0e-aa8c-70e1cab2fe1c/1dfaa74d-f30e-47be-92a3-98093299cc90/1502x1080/match/image.jpg"
	},
	{
		name: "yaourt",
		lactose: false,
		noix: true,
		price: 2.98,
		organic: false,
		imgSrc: "https://sob-prd-cdn-products.azureedge.net/media/image/product/en/medium/0005680009829.jpg"
	},
	{
		name: "banane",
		lactose: true,
		noix: true,
		price: 0.98,
		organic: true,
		imgSrc: "https://chiquitabrands.com/wp-content/uploads/2019/08/Chiquita_lifestyle_BunchAllAngles_PackCasco6_0054_HR.jpg.png"
	},
	{
		name: "reeses pieces",
		lactose: true,
		noix: false,
		price: 5.95,
		organic: false,
		imgSrc: "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/909d4355096b018c9e1126a6cb8ded03d7a297f3_square2898198_1.jpg?v=1601840328"
	},
	{
		name: "granola aux amandes",
		lactose: true,
		noix: false,
		price: 4.40,
		organic: false,
		imgSrc: "https://www.naturevalley.ca/wp-content/uploads/2019/05/NatureValley-Canada-Products-EN-CrunchyGranolaBar-RoastedAlmond.png"
	},
	{
		name: "lait",
		lactose: false,
		noix: true,
		price: 2.80,
		organic: true,
		imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/240px-Milk_glass.jpg"
	},
	{
		name: "Barre de chocolat au lait",
		lactose: false,
		noix: true,
		price: 3.45,
		organic: false,
		imgSrc: "https://i5.walmartimages.ca/images/Large/168/297/628915168297.jpg"
	},
	{
		name: "laitue",
		lactose: true,
		noix: true,
		price: 0.85,
		organic: true,
		imgSrc: "https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Lettuce_Chopped_Hero.jpg"
	},
	{
		name: "Chips",
		lactose: true,
		noix: true,
		price: 2.65,
		organic: false,
		imgSrc: "https://sc04.alicdn.com/kf/UTB8mlxmqf2JXKJkSanrq6y3lVXa0.jpg"
	},
	{
		name: "Spaghetti",
		lactose: true,
		noix: true,
		price: 1.75,
		organic: true,
		imgSrc: "https://hillshomemarket.com/wp-content/uploads/2013/03/Barilla-Spaghetti-Product-Detail-Page.jpg"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var org = document.getElementById("organic_check");
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose") && (prods[i].lactose == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "noix") && (prods[i].noix == true)){
			product_names.push(prods[i]);
		}
		else if((restriction == "deux") && (prods[i].lactose == true) && (prods[i].noix == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	if(org.checked){
		console.log("made it!")
		product_names.sort(function(a, b){
		if(a.organic && !b.organic){
			return -1;
		}
		else if(!a.organic && b.organic){
			return 1;
		}
		else{
			return a.price - b.price;
		}
				
		});
	}
	else{
		product_names.sort(function(a, b){
			return a.price - b.price;
		});
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return Math.round((totalPrice + Number.EPSILON) * 100) / 100;
}

