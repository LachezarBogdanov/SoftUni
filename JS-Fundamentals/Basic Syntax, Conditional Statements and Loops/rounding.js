function rounding(firstNum, secondNum){

    if(secondNum > 15) {
        secondNum = 15;
    }
    let roundedNum = firstNum.toFixed(secondNum);
    console.log(parseFloat(roundedNum));
}
rounding(3.1415926535897932384626433832795,2);