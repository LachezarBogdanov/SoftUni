function pascalCaseSplitter(str) {

    let words = [];
    let curWord = '';


    for (let i = 0; i < str.length; i++) {
        if(i > 0 && str[i] === str[i].toUpperCase()) {
            words.push(curWord);
            curWord = '';
            curWord += str[i];
        } else {
            curWord += str[i];
        }
    }
    words.push(curWord);
    console.log(words.join(', '));


}
pascalCaseSplitter('ThisIsSoAnnoyingToDo');