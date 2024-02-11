function sumOfOddNumbers(num){

    let count = num;
    let sum = 0;
    let firstNum = 1;

    while(count !== 0) {
        if(firstNum % 2 !== 0) {
            console.log(firstNum);
            sum += firstNum;
            count--;
        }
        firstNum++;
        
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);