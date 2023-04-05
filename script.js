// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
   //Ask the user for length (minimum >= 8 and maximum <= 128)
   let passwordLength = parseInt(prompt("How long should the password be?"));
   //Validate Length
   if (passwordLength < 8 || passwordLength > 128){
    alert("Error, invalid password length.\nPlease choose a password within parameters, which is greater than 8 characters or less than 128");
    return "";
   }

   //Ask the user for which characters to include
   var includeLowercase = confirm("Include lower case letters in password?");
   var includeUppercase = confirm("Include upper case letters in password?");
   var includeNumbers = confirm("Include numbers in password?");
   var includeSpecialchars = confirm("Include special characters in password?");

   //Validate types of characters
   if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialchars){
    alert("Error, invalid character types.\nPlease include at least one lower case, upper case, number, and special character.");
   }

   //Generate a random password
   let passwordChars = [];
   const specialChars = "!\"@#$%^&*()-+,./:;<=>?[\\]_'{|}~";

   //TODO handle other character types

   if (includeSpecialchars){
    passwordChars = passwordChars.concat(specialChars.split(""));
   }

   //Return generated password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
