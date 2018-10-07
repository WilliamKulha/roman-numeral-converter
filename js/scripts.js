//Business Logic

//Error Messages
const nanError = 'Please enter a number'
const tooBig = 'Please enter a number smaller than 4000'

//Function for Conversion
let convertToRomanNumeral = function(arrayMaxLength4) {
  let convertedArray = []
  let onesArray = []
  let tensArray = []
  //Convert the Ones Column
  let onesColumn = arrayMaxLength4.pop();
  for (let count = onesColumn; count > 0; count -= 1) {
    onesArray.splice(0, 0, 'I');
  }
  convertedArray.push(onesArray.join(""));

  //Conver the Tens Column
  let tensColumn = arrayMaxLength4.pop();
  for (let count = tensColumn; count > 0; count -= 1) {
    tensArray.splice(0,0, 'X');
  }
  convertedArray.push(tensArray.join(""));
  console.log(convertedArray);
}

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
      convertToRomanNumeral(inputAsArray);
    }
  });
});
