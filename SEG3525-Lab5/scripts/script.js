var exampleModal = document.getElementById('RVModal')
console.log(document)
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalBodyInput.value = recipient
})


var JCDDates = ["08/06/2021","15/06/2021","22/06/2021","29/06/2021","06/07/2021","13/07/2021"];
var ALDates = ["09/06/2021","16/06/2021","23/06/2021","30/06/2021","07/07/2021","14/07/2021"];
var DBDates = ["10/06/2021","17/06/2021","24/06/2021","01/07/2021","08/07/2021","15/07/2021"];
var activeDates = JCDDates;

function checkInputRV(){
	var all = false
	if(document.getElementById("prenom").value != ""){
		if(document.getElementById("nom").value != ""){
			if(document.getElementById("email").value != ""){
				if(document.getElementById("phone").value != ""){
					if($("#datepicker").datepicker("getDate")!= null){
						all = true;
						$("#PayInfo").prop("disabled", false);
						$("#lockRV").hide();
					}
				}
			}
		}
	}
	if(!all){
		$("#PayInfo").prop("disabled", true);
		$("#lockRV").show();
	}
}

function checkInputPayment(){
	var all = false;
	if(document.getElementById("cardNum").value != ""){
		if(document.getElementById("cardName").value != ""){
			if(document.getElementById("cardDate").value != ""){
				if(document.getElementById("CVCCard").value != ""){
					all = true;
					$("#BookFromPay").prop("disabled", false);
					$("#lockPay").hide();
				}
			}
		}
	}
	if(!all){
		$("#BookFromPay").prop("disabled", true);
		$("#lockPay").show();
	}
}

function validateCardNumber(numberID){
	var i = document.getElementById(numberID).value;

	var filter = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/
	if(filter.test(i)){
		return true;
	}
	else{
		return false;
	}
}

function validateCardDate(dateID){
	var i = document.getElementById(dateID).value;

	var filter = /[0-1][0-9][/][0-9]{2}/
	if(filter.test(i)){
		return true;
	}
	else{
		return false;
	}
}

function validateCVC(CVCID){
	var i = document.getElementById(CVCID).value;

	var filter = /[0-9]{3}/
	if(filter.test(i)){
		return true;
	}
	else{
		return false;
	}
}


function DisableWeekend(date){
	var noWeekend = $.datepicker.noWeekends(date)
	if(noWeekend[0]){
		return DisableDates(date);
	}
	else{
		return noWeekend;
	}
}

function DisableDates(date){
	var string = jQuery.datepicker.formatDate("dd/mm/yy", date);
	return [activeDates.indexOf(string) == -1];
}

function reinitializeDates(){
	$( "#datepicker" ).datepicker("refresh");
}

  $( function() {
    $( "#datepicker" ).datepicker({
    	beforeShowDay: DisableWeekend,
    	onSelect: function(){
  	 		checkInputRV();
  	 	}
    });
  } );



  $( function() {
    jQuery(document).tooltip();
  } );


function validatePhone(pnumberID){
	var i = document.getElementById(pnumberID).value;

	var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	if(filter.test(i)){
		return true;
	}
	else{
		return false;
	}
}

function validateName(nameID){
	var i = document.getElementById(nameID).value;

	var filter = /^[a-zA-Z ]+$/;
	if(filter.test(i)){
		return true;
	}
	else{
		return false;
	}
}

function validateEmail(emailID){
	var i = document.getElementById(emailID).value;

	var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(filter.test(i)){
		return true;
	}
	else{
		return false;
	}
}

  $(document).ready(function(){

  	$("#phone").on("change", function(){
  		if(!validatePhone("phone")){
  			alert("Le numéro de téléphone entré n'est pas valide, SVP réessayer (plusieurs formats sont acceptés, tels que XXX-XXX-XXXX");
  			$("#phone").val("");
  		}
  			checkInputRV();


  	})
  	$("#prenom").on("change", function(){
  		if(!validateName("prenom")){
  			alert("Le nom entré n'est pas valide, SVP réessayer. Seulement les lettres sont acceptées (pas d'accents)");
 			$("#prenom").val("");
  		}
  			checkInputRV();

  	})

  	  $("#nom").on("change", function(){
  		if(!validateName("nom")){
  			alert("Le nom entré n'est pas valide, SVP réessayer. Seulement les lettres sont acceptées (pas d'accents)");
 			$("#nom").val("");
  		}
  			checkInputRV();

  	})

  	 $("#email").on("change", function(){
  	 	if(!validateEmail("email")){
  	 		alert("L'adresse courriel entrée n'est pas valide, SVP réessayer");
  	 		$("#email").val("");
  	 	}
  			checkInputRV();
  	 })

  	 $("#expertRV").on("change", function(){
  	 	var i = document.getElementById("expertRV").value;
  	 	activeDates = eval(i + "Dates");
  	 	$("#datepicker").datepicker("setDate", null);
  	 	reinitializeDates()
  	 })

  	 $("#cardNum").on("change", function(){
  	 	if(!validateCardNumber("cardNum")){
  	 		alert("Le numéro entré n'est pas valide, SVP réessayer");
  	 		$("#cardNum").val("");
  	 	}
  			checkInputPayment();
  	 })

  	 $("#cardName").on("change", function(){
  	 	if(!validateName("cardName")){
  	 		alert("Le nom entré n'est pas valide, SVP réessayer");
  	 		$("#cardName").val("");
  	 	}
  			checkInputPayment();
  	 })

  	 $("#cardDate").on("change", function(){
  	 	if(!validateCardDate("cardDate")){
  	 		alert("La date entrée n'est pas valide, SVP réessayer");
  	 		$("#cardDate").val("");
  	 	}
  			checkInputPayment();
  	 })

  	 $("#CVCCard").on("change", function(){
  	 	if(!validateCVC("CVCCard")){
  	 		alert("La date entrée n'est pas valide, SVP réessayer");
  	 		$("#CVCCard").val("");
  	 	}
  			checkInputPayment();
  	 })

  	 $("#BookFromPay").on("click", function(){
  	 	$("#expertReceipt").text($("#expertRV").find(":selected").text())
  	 	$("#timeReceipt").text($("#timepicker").find(":selected").text())
  	 	$("#dateReceipt").text(jQuery.datepicker.formatDate("dd/mm/yy", $("#datepicker").datepicker("getDate")))
  	 	
  	 })


  })