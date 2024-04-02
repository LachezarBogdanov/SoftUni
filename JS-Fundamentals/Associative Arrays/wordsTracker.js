function wordsTracker (arr){

    let serchedWords = arr.shift().split(' ');
    let wordsOcc = {};

    for (let word of serchedWords) {
        wordsOcc[word] = 0;
    }

    for (let curWord of arr) {
        if(curWord in wordsOcc) {
            wordsOcc[curWord] += 1;
        }
    }

    let entries = Object.entries(wordsOcc).sort((a, b) => b[1] - a[1]);

    for (let [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }
    

}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);