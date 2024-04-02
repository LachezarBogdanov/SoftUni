function wordOccurrences (arr){

    let wordOccurs = {};

    for (let curWord of arr) {

        if(!wordOccurs.hasOwnProperty(curWord)) {
            wordOccurs[curWord] = 1;
        } else {
            wordOccurs[curWord] += 1;
        }
    }

    let sortedWords = Object.entries(wordOccurs).sort((a, b) => b[1] - a[1]);
    
    sortedWords.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here",
 "is", "another", "sentence", "And", "finally", "the",
  "third", "sentence"]);