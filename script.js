// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // Define password criteria variables 
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    
    // Password criteria container 
    var passwordContainer = "";

    // Lowercase letters
    if(confirm("Click OK if password should have lowercase letters.")){
        passwordContainer = passwordContainer.concat(lowerCase);
    }

    //Uppercase letters 
    if(confirm("Click OK if password should have uppercase letters.")){
        passwordContainer = passwordContainer.concat(upperCase);
    }

    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
