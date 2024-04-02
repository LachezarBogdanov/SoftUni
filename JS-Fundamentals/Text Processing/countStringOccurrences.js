function countStringOccurrences (text, word){

    let splitedText = text.split(' ');
    let counter = 0;

    for (let curWord of splitedText) {
        if(curWord === word) {
            counter++;
        }
    }

    console.log(counter);

}
countStringOccurrences('This is a word and it also is a sentence',
'is');