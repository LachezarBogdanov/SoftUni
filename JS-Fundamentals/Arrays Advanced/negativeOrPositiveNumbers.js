function negativeOrPositiveNumbers (arr) {

    let numChecker = checkNum(arr);
    console.log(numChecker.join('\n'));
    

    function checkNum (arr) {
        
    let newArr = [];
        for(let num of arr) {
            let curNum = Number(num);
            if(curNum < 0) {
                newArr.unshift(curNum);
            } else {
                newArr.push(curNum);
            }
        }
        return newArr;
    }


}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);