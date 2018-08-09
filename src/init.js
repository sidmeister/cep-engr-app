// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
let fName="this button represent first name of the user";
$(document).ready(function(){
    console.log( "ready" );
    $("#submitBtn").click(function(e){
        fName= $('#first_name').val();
        console.log(fName);
        alert("hello "+ fName);
    });  
    $('#firstNameBtn').click(function(e){
        //alert(fName);
        $('#first_name').append(fName);

    });  
});
// using jQuery and the object above, display the information as the appropriate button is clicked
