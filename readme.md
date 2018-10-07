# _Roman Numeral Converter_

#### _A webpage that converts Arabic Numerals to Roman Numerals, 10-7-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD with learnhowtoprogram.com. It takes user input in the form of a string (though it must contain only numbers), converts that number to roman numerals and displays the result to the user._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program Gathers User Input** | User input: '84' | Output: '84' |
**Program Makes an Array from Input and Coverts strings to Numbers** | User input: '84' | Output: [8, 4] |
**Program evaluates the last index of the array, the singles column, and pushes the conversion to a new array** | Input: [8, 4] | Output: ['IV'] |
**Program evaluates the second to last index of the array, the tens column, and pushes the conversion to the previously created array** | Input: [8, 4] | Output: ['IV', 'LXXX']|
**Program evaluates for the hundreds and thousands columns in they are present** | Input: [1, 2, 3, 4] | Output: ['IV', 'XXX', 'CC', 'M'] |
**Program reverses the array so that the numbers are displayed in their proper position** | Input: ['IV', 'XXX', 'CC', 'M'] | Output: ['M', 'CC', 'XXX', 'IV'] |
**Program joins the array and displays it on the page** | Input: ['M', 'CC', 'XXX', 'IV'] | Output: 'MCCXXXIV' |


## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/zangiboy/roman-numeral-converter.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any questions or advice, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This Roman Numeral Converter Application is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
