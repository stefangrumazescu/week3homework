// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

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
generateBtn.addEventListener("click", function() {(writePassword); })
