function mathOp (firstNumm, secondNum, operator){

    switch(operator) {
        case '+':
            console.log(firstNumm + secondNum);
            break;

        case '-':
            console.log(firstNumm - secondNum);
            break;

        case '*':
            console.log(firstNumm * secondNum);
            break;

        case '/':
            console.log(firstNumm / secondNum);
            break;

        case '%':
            console.log(firstNumm % secondNum);
            break;

        case '**':
            console.log(firstNumm ** secondNum);
            break;
    }

}
mathOp(3, 5.5, '*')