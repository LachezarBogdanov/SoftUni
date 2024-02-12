function calculator(number, operator, secondNumber){

    let sum = 0;

    if(operator === '+') {
        sum = number + secondNumber;
    } else if(operator === '-') {
        sum = number - secondNumber;
    } else if(operator === '/') {
        sum = number / secondNumber;
    } else if(operator === '*') {
        sum = number * secondNumber;
    }
    console.log(sum.toFixed(2));
    
} 
calculator(5,
    '+',
    10);