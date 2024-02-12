function amazingNumbers(num){

    let numToStr = num.toString();
    let sum = 0;

    for(let index = 0; index < numToStr.length; index++) {
        let curNum = Number(numToStr[index]);
        sum += curNum;
    }

    let result = sum.toString().includes('9');
    console.log(result ?
        `${num} Amazing? True` :
        `${num} Amazing? False`    );

}
amazingNumbers(1233);