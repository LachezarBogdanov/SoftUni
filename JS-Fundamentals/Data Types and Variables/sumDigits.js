function sumDigits(num){

    let numStr = num.toString();
    let sum = 0;

    for(let i = 0; i <= numStr.length - 1; i++) {
        let curNum = Number(numStr[i]);
        sum += curNum;
    }
        console.log(sum);
    
}
sumDigits(245678);