//Business Logic

//Error Messages
const nanError = 'Please enter a number'
const tooBig = 'Please enter a number smaller than 4000'

//Function for Conversion
let convertToRomanNumeral = function(arrayMaxLength4) {
  let convertedArray = []
  //Convert the Ones Column
  let onesArray = []
  let onesColumn = arrayMaxLength4.pop();
  if (onesColumn < 4) {
    for (let count = onesColumn; count > 0; count -= 1) {
      onesArray.splice(0, 0, 'I');
    }
  } else if (onesColumn === 4) {
    onesArray.splice(0, 0, 'IV');
  } else if (onesColumn >= 5 && onesColumn < 9) {
    onesArray.splice(0, 0, 'V');
    for (let count = onesColumn - 5; count > 0; count -= 1) {
      onesArray.splice(1, 0, 'I')
    }
  } else if (onesColumn === 9) {
    onesArray.splice(0, 0, 'IX');
  }
  convertedArray.push(onesArray.join(''));

  //Convert the Tens Column
  let tensArray = []
  let tensColumn = arrayMaxLength4.pop();
  if (tensColumn < 4) {
    for (let count = tensColumn; count > 0; count -= 1) {
      tensArray.splice(0,0, 'X');
    }
  } else if (tensColumn === 4) {
    tensArray.splice(0, 0, 'XL')
  } else if (tensColumn >= 5 && tensColumn < 9) {
    tensArray.splice(0, 0, 'L')
    for (let count = tensColumn - 5; count > 0; count -= 1) {
      tensArray.splice(1, 0, 'X');
    }
  } else if (tensColumn === 9) {
    tensArray.splice(1, 0, 'XC')
  }
  convertedArray.push(tensArray.join(""));

  //Convert the Hundreds column
  let hundredsArray = []
  let hundredsColumn = arrayMaxLength4.pop();
  if (hundredsColumn < 4) {
    for (let count = hundredsColumn; count > 0; count -= 1) {
      hundredsArray.splice(0, 0, 'C');
    }
  } else if (hundredsColumn === 4) {
    hundredsArray.splice(0, 0, 'CD');
  } else if (hundredsColumn >= 5 && hundredsColumn < 9) {
    hundredsArray.splice(0, 0, 'D');
    for (let count = hundredsColumn - 5; count > 0; count -= 1){
      hundredsArray.splice(1, 0, 'C')
    }
  } else if (hundredsColumn === 9) {
    hundredsArray.splice(0, 0, 'CM');
  }
  convertedArray.push(hundredsArray.join(""));

  //Convert the Thousands column
  let thousandsArray = []
  let thousandsColumn = arrayMaxLength4.pop();
  for (let count = hundredsColumn; count > 0; count -= 1) {
    thousandsArray.splice(0, 0, 'M');
  }
  convertedArray.push(thousandsArray.join(""));
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
