function diagonalSums (input){
    
    let arrOfNums = [];
    let mainSum = 0;
    let secondarySum = 0;
    

    for (let i = 0; i < input.length; i++) {
        mainSum += input[i][i];
    }
    arrOfNums.push(mainSum);
    for(let j = 0; j < input.length; j++) {
        secondarySum += input[input.length - 1 - j][j];
    }
    arrOfNums.push(secondarySum);
    console.log(arrOfNums.join(' '));
}
diagonalSums([[20, 40],
    [10, 60]]);