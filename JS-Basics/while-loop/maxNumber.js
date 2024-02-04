function maxNumber (input){

    let numberEl = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
   

    while(numberEl !== 'Stop'){
        let currentNumber = Number(numberEl);

        if(currentNumber > max){
            max = currentNumber;
        }
        numberEl = (input[index]);
        index++;
    }
    console.log(max);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"]);