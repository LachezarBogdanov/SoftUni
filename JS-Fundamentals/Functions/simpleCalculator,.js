function simpleCalculator (firstNum, secondNum, operator) {

    switch(operator) {
        case 'multiply':
            let multiply = (a, b) => (a * b);
            console.log(multiply(firstNum, secondNum));
            break;

        case 'divide':
            let divide = (c, d) => (c / d);
            console.log(divide(firstNum, secondNum));
            break;

        case 'add':
            let add = (e, f) => (e + f);
            console.log(add(firstNum, secondNum));
            break;

        case 'subtract':
            let subtract = (g, h) => (g - h);
            console.log(subtract(firstNum,secondNum));
            break;
    }

}
simpleCalculator(40,
    8,
    'divide');