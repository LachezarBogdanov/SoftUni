function accBalance (input){

    let total = 0;
    let index = 0;
    let currentRow = input[index];

    while(currentRow !== 'NoMoreMoney'){
        let currentRowAsNumber = Number(currentRow);

        if(currentRowAsNumber < 0){
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${currentRowAsNumber.toFixed(2)}`);
        total += currentRowAsNumber;

        index++
        currentRow = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);