	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 
 
var products = [
	{
		name: "brocoli",
		lactose: true,
		noix: true,
		price: 1.99,
		organic: true
	},
	{
		name: "pain",
		lactose: true,
		noix: true,
		price: 2.35,
		organic: true
	},
	{
		name: "salmon",
		lactose: true,
		noix: true,
		price: 10.00,
		organic: true
	},
	{
		name: "yaourt",
		lactose: false,
		noix: true,
		price: 2.98,
		organic: false
	},
	{
		name: "banane",
		lactose: true,
		noix: true,
		price: 0.98,
		organic: true
	},
	{
		name: "reeses pieces",
		lactose: true,
		noix: false,
		price: 5.95,
		organic: false
	},
	{
		name: "granola aux amandes",
		lactose: true,
		noix: false,
		price: 4.40,
		organic: false
	},
	{
		name: "lait",
		lactose: false,
		noix: true,
		price: 2.80,
		organic: true
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

