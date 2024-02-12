function signCheck (numOne, numTwo, numThree) {

    function firstAndSecondMultiply (f, s){

        return f * s;
    }
    let firstAndSecondResult = firstAndSecondMultiply(numOne, numTwo);
    let finalNums = firstAndSecondResult * numThree;

    if(finalNums < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }

}
signCheck(-1,
    -2,
    -3);


