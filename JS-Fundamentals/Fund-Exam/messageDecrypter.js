function messageDecrypter (arr){

    let countLines = Number(arr.shift());
    let pattern = /^([$|%])([A-Z][a-z]{2,})\1: \[\d+\]\|\[\d+\]\|\[\d+\]\|$/;
    let patternForDigits = /[\d]+/g;
    let thirdPat = /[A-za-z]+/;

    for (let i = 0; i < countLines; i++) {
        let curLine = arr[i];
        if(pattern.test(curLine)) {
            let tagMatch = curLine.match(thirdPat)[0];
            let matches = curLine.match(patternForDigits).map(Number);
            let word = '';
            for (let num of matches) {
                let char = String.fromCharCode(num)
                word += char
            }
            console.log(`${tagMatch}: ${word}`);
        } else {
            console.log("Valid message not found!");
        }
    }

}
messageDecrypter(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"]);
