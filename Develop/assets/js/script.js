// Getting the DOM Eleements
// DOM for results
const resultDOM = document.getElementById('result');
// DOM for copy
const copybtnDOM = document.getElementById('copy');
// Dom for length
const lengthDOM = document.getElementById('length');
// DOM for uppercase
const uppercaseDOM = document.getElementById('uppercase');
// DOM for numbers
const numbersDOM = document.getElementById('numbers');
// DOM for symbols
const symbolsDOM = document.getElementById('symbols');
// DOM for generate 
const generatebtn = document.getElementById('generate');
// DOM for generate form
const form = document.getElementById('passwordGeneratorForm');

// Generates codes
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Code for copy password button
copybtnDOM.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const passwordToCopy = resultDOM.innerText;

  // When Password is Empty
  if (!passwordToCopy) return;

  // Copy Functiona
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password Copied to Clipboard');
});

// Checking the Options that are selected and setting the password
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});

// The Password Generating Function
let generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
};

// The Character Code Generating Function
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}