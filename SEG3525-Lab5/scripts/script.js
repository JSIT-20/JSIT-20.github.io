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