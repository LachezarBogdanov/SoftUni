function sameNums (num){

    let numToStr = num.toString();
    let curNum = '';
    let previsiousNum = '';
    let flag = true;
    
    for (let i = 0; i < numToStr.length; i++) {
        if(i === 0) {
            curNum += numToStr[i];
            previsiousNum = numToStr[i]
        }

        if(numToStr[i] !== previsiousNum) {
            flag = false;
            break;
        }
    }
    console.log(flag);

    let sum = 0;
    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }
    console.log(sum);

}
sameNums(2222222);