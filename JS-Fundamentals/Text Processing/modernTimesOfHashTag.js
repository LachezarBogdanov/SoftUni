function hashtag (str){

    let specialWords = str.split(' ').filter(word => word.startsWith('#') && word.length > 1);

    let template = /\b[A-Za-z]+\b/;

    for (let curWord of specialWords) {
        if(template.test(curWord)) {
            let curWordSlice = curWord.slice(1);
            console.log(curWordSlice);
        }
    }

}
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign');