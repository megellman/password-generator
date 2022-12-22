var generateBtn = document.querySelector("#generate");

// Function that loops through the given criteria to create a random password
function generatePassword() {
    // This will hold the password created within the function
    var pass = "";
   
    // Define password criteria variables 
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // Password criteria container 
    var passwordContainer = "";

    //  Define confirmation variables 
    var passwordLength = prompt("How many characters should your password have? A password must have a length of at least 8 characters and no more than 128 characters.");
    var lowerYes = confirm("Click OK if password should have lowercase letters.");
    var upperYes = confirm("Click OK if password should have uppercase letters.");
    var numericYes = confirm("Click OK if password should have numeric characters.");
    var specialYes  = confirm("Click OK if password should have special characters.");

    //  Makes sure that user selects a valid password length 
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error: Please select a value between 8 and 128.");
        return
    }

    //  If user selects criteria, add that criteria variable to the password criteria container
    if (lowerYes) {
        passwordContainer = passwordContainer.concat(lowerCase);
    }
    if (upperYes) {
        passwordContainer = passwordContainer.concat(upperCase);
    }
    if (numericYes) {
        passwordContainer = passwordContainer.concat(numeric);
    }
    if (specialYes) {
        passwordContainer = passwordContainer.concat(special);
    }

    // Cancel function if user does not select a criteria
    if (passwordContainer.length === 0) {
        alert("Please select at least one character type.");
    }

    // Loop starts at 0, iterates until it reaches the password length selected, and increments by 1
    for (var i = 0; i <= passwordLength; i++) {
        var pass;

        // Generate a random number that is the length of passwordContainer or less
        var randomNumber = Math.floor(Math.random() * passwordContainer.length + 1);

        // Run through the passwordContainer variable and pull out the character that is located at the index of the number provided by the randomNumber variable
        pass += passwordContainer.charAt(randomNumber)
        console.log(pass);
    }
    // This is the value that exits this function
    return pass;
}

function writePassword() {

    // password will equal whatever we returned in the function
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
