function operationsBetweenNumbers (input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    
    let result = 0;
    let EvenOrOdd = '';
    
    switch (operator){
        case '+':
            result = n1 + n2;
            EvenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${n1} + ${n2} = ${result} - ${EvenOrOdd}`);
            break;
    
        case '-':
            result = n1 - n2;
            EvenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${n1} - ${n2} = ${result} - ${EvenOrOdd}`);
            break;
    
        case '*':
            result = n1 * n2;
            EvenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${n1} * ${n2} = ${result} - ${EvenOrOdd}`);
            break;
    
        case '/':
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            break;
    
        case '%':
            if(n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
    }
}
operationsBetweenNumbers(["10",
"12",
"+"]);
