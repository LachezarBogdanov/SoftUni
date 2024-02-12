function evenOrOddSubtraction (input){

    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let num of input) {
        if(num % 2 === 0) {
            sumOfEven += num;
        } else {
            sumOfOdd += num;
        }
    }
    console.log(sumOfEven - sumOfOdd);
}
evenOrOddSubtraction([1,2,3,4,5,6]);