function stringSubstring (word, text){

    text = text.toLowerCase();
    let splitedText = text.split(' ');

    if(splitedText.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring('python',
'JavaScript is the best programming language');