function hardWord (arr){

    let text = arr[0];
    let words = arr[1];
    let underScores = [];

    for (let el of words) {
        let underScore = '_';
        underScore = underScore.repeat(el.length);
        underScores.push(underScore);
    }

    let sortedWords = words.sort((a, b) => b.length - a.length);
    let sortedUnderscore = underScores.sort((a, b) => b.length - a.length);
    
    for (let i = 0; i < sortedUnderscore.length; i++) {
        let curUnderscore = sortedUnderscore[i];
        let curWord = sortedWords[i];

        text = text.replace(curUnderscore, curWord);
    }
    
    console.log(text);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);