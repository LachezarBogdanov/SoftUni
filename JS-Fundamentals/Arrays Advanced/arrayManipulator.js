function arrayManipulator(numbers, commands) {

    for (let digit of commands) {
        let tokens = digit.split(' ');
        let command = tokens.shift();
        
        if(command === 'add') {
            let idx = Number(tokens.shift());
            let element = Number(tokens.shift());

            numbers.splice(idx, 0, element);
        } else if(command === 'addMany') {
            let idx = Number(tokens.shift());

            for (let element of tokens) {
                numbers.splice(idx, 0, Number(element));
                idx++;
            }
        } else if(command === 'contains') {
            let element = Number(tokens.shift());
                let idx = numbers.indexOf(element);
                console.log(idx);

            
        } else if(command === 'remove') {
            let idx = Number(tokens.shift());

            numbers.splice(idx, 1);
        } else if(command === 'shift') {
            let positions = Number(tokens.shift());

            for(let i = 1; i <= positions; i++) {
                let numToLeft = numbers.shift();
                numbers.push(numToLeft);
            }
        } else if(command === 'sumPairs') {
            let sumArr = [];

            for(let j = 0; j < numbers.length; j += 2) {
                if(j + 1 < numbers.length) {
                    sumArr.push(numbers[j] + numbers[j + 1]);
                } else {
                    sumArr.push(numbers[j]);
                }
            }
            numbers = sumArr;
        } else if(command === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
        }
    }


}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);