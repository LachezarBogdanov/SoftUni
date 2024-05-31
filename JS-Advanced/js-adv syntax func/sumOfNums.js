function sumOfNums (n, m){

    const firstNum = Number(n);
    const secondNum = Number(m);
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    
    return sum;
}
sumOfNums('-8', '20');