function factorialDivision (firstNum, secondNum) {

    let factorialOne = factorialOfNum(firstNum);
    let factorialTwo = factorialOfNum(secondNum);
    let finalResult = factorialOne / factorialTwo;

    console.log(finalResult.toFixed(2));

    function factorialOfNum (firstNum) {
        let result = 1;
        for(let i = firstNum; i > 0; i--) {
            result *= i;
        }
        return result;
    }
}
factorialDivision(6, 2);