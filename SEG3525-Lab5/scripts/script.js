  $( function() {
    $( "#datepicker" ).datepicker();
  } );



  $( function() {
    jQuery(document).tooltip();
  } );


function validatePhone(pnumber){
	var i = document.getElementById(pnumber).value;

	var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
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
  	})

  })