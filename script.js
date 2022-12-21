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

    // Confirm that user will accept a password length of 8-128 characters
    var passwordLength = prompt("How many characters should your password have? A password must have a length of at least 8 characters and no more than 128 characters.");

    if(passwordLength < 8 || passwordLength > 128) {
        alert("Error: Please select a value between 8 and 128.");
        return
    }

    // Lowercase letters
    if(confirm("Click OK if password should have lowercase letters.")){
        passwordContainer = passwordContainer.concat(lowerCase);
    }

    //Uppercase letters 
    if(confirm("Click OK if password should have uppercase letters.")){
        passwordContainer = passwordContainer.concat(upperCase);
    }

    // Numeric characters 
    if(confirm("Click OK if password should have numeric characters.")){
        passwordContainer = passwordContainer.concat(numeric);
    }

    // Special characters
    if(confirm("Click OK if password should have special characters.")){
        passwordContainer = passwordContainer.concat(special);
    }

    // Cancel function if user does not select a criteria
    if(passwordContainer.length === 0){
        alert("Please select at least one character type.");
    }

    // Function that loops through the given criteria to create a random password
    function generatePassword(){
        // This will hold the password created within the function
        var pass = "";

        // Generates a random whole number between the max and min provided above
        var loopStop = Math.floor(Math.random() * passwordLength + 1) + passwordLength;

        // Loop starts at 0, iterates until it reaches the random number generated from loopStop, and increments by 1
        for (var i = 0; i <= loopStop; i++){

            // Generate a random number that is the length of loopStop or less
            var randomNumberOfLoopStop = Math.floor(Math.random() * loopStop + 1);

            // Run through the passwordContainer variable and pull out the character that is located at the index of the number provided by the randomNumberOfLoopStop variable
            pass += passwordContainer.charAt(randomNumberOfLoopStop)
        }
        // This is the value that exits this function
        return pass;
    }

    // password will equal whatever we returned in the function
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
