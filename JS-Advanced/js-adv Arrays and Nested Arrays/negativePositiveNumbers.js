function negativePositiveNumbers (arr){

    let finalArr = [];

    for (let curNum of arr) {
        if(curNum < 0) {
            finalArr.unshift(curNum);
        } else {
            finalArr.push(curNum);
        }
    }
    console.log(finalArr.join('\n'));

}
negativePositiveNumbers([7, -2, 8, 9]);