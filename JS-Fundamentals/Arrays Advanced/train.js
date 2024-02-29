function train(arr) {

    let numbers = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let command of arr) {
        let arrOfCommands = command.split(' ');
        
        if(arrOfCommands.length === 2) {
            let numToAdd = Number(arrOfCommands[1]);
            numbers.push(numToAdd);
        } else {
            let passengers = Number(arrOfCommands[0]);

            for (let i = 0; i <= arr.length; i++) {
                let curPassengers = numbers[i];
                if(curPassengers + passengers <= capacity) {
                    numbers[i] = curPassengers + passengers;
                    break;
                }
            }
        }
    }
    console.log(numbers.join(' '));
    
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);