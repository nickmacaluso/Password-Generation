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

function generatePassword() {
  passwordLength = 0;
    
var smallCase = "abcdefghijklmnopqrstuvwxyz".split(""); 
var tallCase = "ABCDEFGHIJKLMNOP".split("");
var interestChar = "~!@#$%^&*()_+=".split("");
var digits = "1234567890".split("");
var big = [smallCase, tallCase, digits, interestChar];
var sets = ["lowercase letters", "uppercase letters", "numbers", "special characters"];

while ((passwordLength<8) || (passwordLength>129) || isNaN(passwordLength)) {
  passwordLength = Math.floor(prompt("How many characters would you like your password to be? (8-128)"));
}

var password = new Array(passwordLength);
var options = new Array(0);
var numSets = new Array (4);

for (i=0;i<sets.length;i++) {
  numSets[i] = confirm("Would you like your password to include " + sets[i] + "?");
  if (numSets[i]) {
    options = options.concat(big[i]);
  }
}

if(!numSets.includes(true)) {
  alert("You need to select at least one type of character for your password.");
  return
}

for (i=0;i<passwordLength;i++) {
password[i]=options[Math.floor(Math.random() * options.length)];
}

for (i=0;i<4;i++) {
if (numSets[i]) {
  password[i] = big[i][Math.floor(Math.random() * big[i].length)];
}
}
password = password.join('');
return password;
}
