function revealWords (words, str){

    let splittedWords = words.split(', ');

    for (let curWord of splittedWords) {
        let template = '*'.repeat(curWord.length);
        str = str.replace(template, curWord);
    }

    console.log(str);

}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');