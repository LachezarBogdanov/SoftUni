function numbersFromMtoN(m, n){

    let firstNum = m;
    let secondNum = n;

    for(let big = firstNum; big >= secondNum; big--) {
        console.log(big);
    }
}
numbersFromMtoN(6, 2);