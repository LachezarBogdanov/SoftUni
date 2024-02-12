function addAndSubtract (firstNum, secondNum, thirdNum) {

    let sumOfFirst = sum(firstNum, secondNum);
    let finalSum = subtract(sumOfFirst, thirdNum);

    console.log(finalSum);
    
    function sum (x, s) {
    return x + s;    
    }

    function subtract (k, l) {
        return sumOfFirst - thirdNum;
    }
}
addAndSubtract(42,
    58,
    100);