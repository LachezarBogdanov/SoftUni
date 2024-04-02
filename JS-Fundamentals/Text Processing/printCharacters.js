function printCharacters (word){

    let splitedStr = word.split('');
    
    for (let curEl of splitedStr) {
        console.log(curEl);
    }

}
printCharacters('AWord');