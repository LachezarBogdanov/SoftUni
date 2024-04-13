function stringGame (arr){

    let string = arr.shift();

    let command = arr.shift();

    while(command !== 'Done') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action === 'Change') {
            let [char, replacement] = tokens;
            let splitedStr = string.split('');

            for (let i = 0; i < splitedStr.length; i++) {
                if(splitedStr[i] === char) {
                    splitedStr[i] = replacement;
                }
            }
            string = splitedStr.join('');
            console.log(string);
        } else if(action === 'Includes') {
            let substr = tokens.shift();

            if(string.includes(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if(action === 'End') {
            let substr = tokens.shift();

            if(string.endsWith(substr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if(action === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);

        } else if(action === 'FindIndex') {
            let char = tokens.shift();
            string = string.split('');

            let idx = string.indexOf(char);
            string = string.join('');
            console.log(idx);

        } else if(action === 'Cut') {
            let [startIdx, count] = tokens.map(Number);

            let slicedStr = string.slice(startIdx, startIdx + count);
            console.log(slicedStr);
        }

        command = arr.shift();
    }


}
stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"]);