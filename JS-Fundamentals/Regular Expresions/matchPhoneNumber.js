function matchPhoneNumber (arr){

    let regex = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let phoneNumbers = [];

    while((validPhone = regex.exec(arr)) !== null) {
        phoneNumbers.push(validPhone[0]);
    }

    console.log(phoneNumbers.join(', '));

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);