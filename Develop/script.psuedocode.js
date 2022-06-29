// What sort of data does my application need to work?

// numbers
// var numbers = ["1", "2", "3", ...];

// special characters
// var special = ["!","@","#", ...];

// lower case letters
// var lowercase = ["a","b","c", ...];

// uppercase case letters
// var uppercase = ["A","B","C", ...];

// Generate Password
function generatePassword() {

    // Prompt the user for their password length and store it in a variable
  
    // Validate the user's provided passwordLength to be a number within the range of 8 to 128
    // IF password length is NOT a number OR is less than 8 OR is greater than 128;
  
      // THEN Alert the user they provided an invalid password length
      // AND Return and exit early
  
    // Prompt the user for if they want special characters and store it in a variable
    
    // Prompt the user for if they want numbers characters and store it in a variable
  
    // Prompt the user for if they want lowercase characters and store it in a variable
  
    // Prompt the user for if they want uppercase characters and store it in a variable
  
    // Validate the user's charater choices
    // IF the user answers no to all character choices
  
      // THEN Alert the user they they need to choose a character option
      // AND Return and exit early
  
    // Celebrate! We have all the data we need :D
  
    // DECLARE a new empty array to store the `characters` we want to use.
  
    // IF the users wants special characters
  
        // combine special characters with `characters`
        // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  
    // REPEAT check and combine for numbers, lowercase and uppercase
  
    // DECLARE a new empty string to store the password we want to build.
  
    // FOR the length of the password the user wants
  
      // Randomly select a character from the list of characters
  
      // Add the selected character to the password being built;
  
    // RETURN the built password;
  
  } 
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);