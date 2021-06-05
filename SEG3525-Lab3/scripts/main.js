 
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
var cartContents = [];
var cartSave = [];


function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
 
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	var count = 1
	for (i = 0; i < optionArray.length; i++) {
		console.log(count%3 == 0 && count != 0)
		console.log(count == optionArray.length - 1)
		console.log(count)

		if(count == 1){
			var row = document.createElement("div");
			row.className = "row";
		}
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var productImage = optionArray[i].imgSrc;

		var container = row.appendChild(document.createElement("div"));
		container.className = "container";

		var image = container.appendChild(document.createElement("img"));
		image.src = productImage;
		image.className = "productImg";

		// create the checkbox and add in HTML DOM
		/*var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.style.marginTop = "5px";
		checkbox.style.marginBottom = "5px";
		s2.appendChild(checkbox);*/
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('p')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " - " + productPrice + "$"));
		label.appendChild(document.createElement("br"));
		if(optionArray[i].lactose){
			var lac = label.appendChild(document.createElement("img"));
			lac.src = "https://www.kindpng.com/picc/m/426-4266979_dairy-lactose-free-icon-png-transparent-png.png";
			lac.width = 25;
			lac.height = 25;
		}
		if(optionArray[i].noix){
			var nut = label.appendChild(document.createElement("img"));
			nut.src = "https://static.thenounproject.com/png/125059-200.png";
			nut.width = 25;
			nut.height = 25;
		}
		if(optionArray[i].organic){
			var nut = label.appendChild(document.createElement("img"));
			nut.src = "https://img.icons8.com/ios/452/organic-food.png";
			nut.width = 25;
			nut.height = 25;
		}
		container.appendChild(label);
		var bouton = container.appendChild(document.createElement("button"));
		bouton.name = "product";
		bouton.value = productName;
		bouton.price = productPrice;
		if(cartContents.includes(productName)){
			bouton.style.backgroundColor = "#f44336";
			bouton.appendChild(document.createTextNode("Supprimer du panier"));
		}
		else{
			bouton.style.backgroundColor = "#4CAF50";
			bouton.appendChild(document.createTextNode("Ajouter au panier"));
		}
		bouton.addEventListener("click", function(){
			if(this.innerHTML == "Ajouter au panier"){
				this.innerHTML = "Supprimer du panier"
				this.style.backgroundColor = "#f44336";
				cartContents.push(this.value);
			}
			else if(this.innerHTML == "Supprimer du panier"){
				this.innerHTML = "Ajouter au panier";
				this.style.backgroundColor = "#4CAF50";
				cartContents.pop(this.value);
			}
			selectedItems();
		})
		
		// create a breakline node and add in HTML DOM

		if((count%3 == 0) || count == optionArray.length){
			console.log("made it")
			console.log(row);
			s2.appendChild(row);
			row = document.createElement("div");
			row.className = "row";
		}
		count = count+1;
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "Vous avez choisi : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].innerHTML == "Supprimer du panier") {
			para.appendChild(document.createTextNode(ele[i].value + " - " + ele[i].price + "$"));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Le prix total est " + getTotalPrice(chosenProducts) + "$"));
		
}

function loadCart(){

	var chosenProducts = [];
	cartContents = []

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "Vous avez choisi : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));

	for (i = 0; i < cartSave.length; i++) { 
		para.appendChild(document.createTextNode(cartSave[i].value + " - " + cartSave[i].price + "$"));
		para.appendChild(document.createElement("br"));
		chosenProducts.push(cartSave[i].value);
		cartContents.push(cartSave[i].value)
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Le prix total est " + getTotalPrice(chosenProducts) + "$"));

	populateListProductChoices('dietSelect', 'displayProduct');

}

function saveCart(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	cartSave = [];


	for (i = 0; i < ele.length; i++) { 
		if (ele[i].innerHTML == "Supprimer du panier") {
			cartSave.push(ele[i]);
		}
	}
	alert("Chariot sauvegardé!");
}