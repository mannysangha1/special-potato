// Get DOM results
// RESULTS
var resultDOM = document.getElementById('result');
// COPY
var copybtnDOM = document.getElementById('copy');
// LENGHT OF PASSWORD
var lengthDOM = document.getElementById('length');
// UPPERCASE LETTERS
var uppercaseDOM = document.getElementById('uppercase');
// NUMBERS
var numbersDOM = document.getElementById('numbers');
// SYMBOLS
var symbolsDOM = document.getElementById('symbols');
// GEBERATE THE PASSWORD
var generatebtn = document.getElementById('generate');
// PASSWORD FORM
var form = document.getElementById('passwordGeneratorForm');

// Generating Character Codes For The Application 
// USE THE ASCII TABLE TO GENERATE CHARACTERS
// UPPERCASE CHARACTERS 65-90 A-Z
var UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
// LOWER CASE CHARACTERS 97-122 a-z
var LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
// NUMBER CHARACTERS 48-57 0-9
var NUMBER_CODES = arrayFromLowToHigh(48, 57);
// SYMBOL CHARACTERS// SPECIAL CHARACTERS 
var SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Copy Password
copybtnDOM.addEventListener("click",() => {
  var textarea = document.createElement('textarea');
  var passwordToCopy = resultDOM.innerText;

  // Edge Case when Password is Empty
  if (!passwordToCopy) return;

  // Copy Functionality
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password Copied to Clipboard');
});

// Checking the options that are selected and setting the password
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var characterAmount = lengthDOM.value;
  var includeUppercase = uppercaseDOM.checked;
  var includeNumbers = numbersDOM.checked;
  var includeSymbols = symbolsDOM.checked;
  var password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});

// The Password Generating Function
// FUNTION FUNCTION FUNCTION
var generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  var charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  var passwordCharacters = [];
  // MATH EQUATIONS ARE FUN
  for (var i = 0; i < characterAmount; i++) {
    var characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};
//FUNCTIONS FOR FUN
console.log("What's the easiest password to crack?");
// The Character Code Generating Function
console.log("Password");
console.log("123456789")
console.log("BAD JOKES INC.")
function arrayFromLowToHigh(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
  
}