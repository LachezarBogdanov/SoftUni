function addASubstract (input){

    let normalArrSum = 0;
    for (let nums of input) {
        normalArrSum += nums;
    }

    let newArr = [];
    let newNum = 0;

    for(let i = 0; i < input.length; i++) {
        newNum = input[i];
        if(newNum % 2 === 0) {
            newNum += i;
        } else {
            newNum -= i;
        }
        newArr.push(newNum);
    }

    let newArrSum = 0;
    for (let secondNums of newArr) {
        newArrSum += secondNums;
    }
    console.log(newArr);
    console.log(normalArrSum);
    console.log(newArrSum);

}
addASubstract([-5, 11, 3, 0, 2]);