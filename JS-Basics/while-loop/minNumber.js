function minNumber (input){

    let numberEl = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
   

    while(numberEl !== 'Stop'){
        let currentNumber = Number(numberEl);

        if(currentNumber < min){
            min = currentNumber;
        }
        numberEl = (input[index]);
        index++;
    }
    console.log(min);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"]);