function passwordGenerator (arr){

    let concatStr = arr[0] + arr[1];
    let word = arr[2];

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let idx = 0;

    for (let i = 0; i < concatStr.length; i++) {
        let curLetter = concatStr[i];

        if(vowels.includes(curLetter)) {
            let letterToReplace = concatStr[i];
            concatStr = concatStr.replace(letterToReplace, word[idx].toUpperCase());
            idx++;
            if(idx >= word.length) {
                idx = 0;
            }
        }
    }

    let reversedPass = concatStr.split('').reverse().join('');

    console.log(`Your generated password is ${reversedPass}`);
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    );