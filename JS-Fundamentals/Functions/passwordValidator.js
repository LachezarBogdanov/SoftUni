function passwordValidator (pass) {

    let isvalidLength = checkLength(pass);
    let isValidLettersAndDigits = checkLettersAndDigit(pass);
    let isValidAtLeastDigits = atLeastDigits(pass);

    if(isvalidLength && isValidLettersAndDigits && isValidAtLeastDigits) {
        console.log("Password is valid");
    }

    function checkLength (password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
        }
    }

    function checkLettersAndDigit (password) {
        let pattern1 = /^[A-Za-z0-9]+$/;
        let isValid = pattern1.test(password);

        if(isValid === true) {
            return true;
        } else {
            console.log("Password must consist only of letters and digits");
        }
    }

    function atLeastDigits (password) {
        let pattern2 = /[0-9]{2,}/;
        let isValid = pattern2.test(password);

        if(isValid === true) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
        }

    }
    
}
passwordValidator('Pa$s$s');