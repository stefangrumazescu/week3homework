// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numbers = "1234567890";
var specialchar = '!@#$%^&*()_+-=<>?/';
var lowercaseArr = lowercase.split('');
var uppercaseArr = uppercase.split('');
var numbersArr = numbers.split('');
var specialcharArr = specialchar.split('');
var passwordString = '';
var passwordcharArr = [];

console.log(lowercaseArr);
var generateBtn = document.querySelector("#generate");
function randChar(arr) {
  return arr [Math.floor(Math.random() * arr.lenght-1)];
}

  function generatePassword () {

    var lowercase = window.confirm("would you like your password to have a lowercase letters?");

    if (lowercase) {
      passwordcharArr.concat(lowercaseArr);
      passwordString = randChar(lowercaseArr);
    }
    var uppercase = window.confirm ('Would you like your password to have uppercase letters?');

    if (uppercase) {
      passwordcharArr.concat(uppercaseArr);
      passwordString = randChar(uppercaseArr);
    }
    var numbers = window.confirm ('Would you like your password to have numbers?');

    if (numbers) {
      passwordcharArr.concat(numbersArr);
      passwordString = randChar(numbersArr);
    }

    var specialchar = window.confirm ('Would you like your password to have special characters?');
    
    if (specialchar) {
      passwordcharArr.concat(specialArr);
      passwordString = randChar(specialArr);
    }
    
    passwordString+= randChar(passwordcharArr);
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//var password=document.getElementById('password');
//function generatePassword() {
  //var chars = "0123456789abcdefg!"
  //var passwordLength = 12
  //var password = "";
//for (var i = 0; i <= paswwordLength; i++) { var randomNumber = Math.floor(Math.random() * chars.length);
  //password += chars.substring(randomNumber, randomNumber +1);
//}
    //document.getElementById("password").value = password;

//function copyPassword() {

  //var copyText = document.getElementById("password");
  //copyText.ariaSelected();
  //document.execCommand("copy");
//}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
