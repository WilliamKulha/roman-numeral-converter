//Error Messages
let nanError = 'Please enter a number'

//User Logic
$(document).ready(function() {
  $('#input_form').submit(function(event) {
    event.preventDefault();
    let userInput = $('#user_input').val();
    if (isNaN(userInput) === true) {
      $('.error_here').text(nanError);
    } else {
      console.log(userInput);
    }
  });
});
