//Business Logic

//Error Messages
let nanError = 'Please enter a number'
let tooBig = 'Please enter a number smaller than 4000'



//User Logic
$(document).ready(function() {
  $('#input_form').submit(function(event) {
    event.preventDefault();
    let userInput = $('#user_input').val();
    if (isNaN(userInput) === true) {
      $('.error_here').text(nanError);
    } else if (parseInt(userInput) >= 4000) {
      $('.error_here').text(tooBig);
    } else {
      let inputAsArray = userInput.split("").map(Number);
      console.log(typeof(inputAsArray[2]));
    }
  });
});
