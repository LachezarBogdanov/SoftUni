function smallestTwoNumber (arr){

    let sortedArr = arr.sort((a, b) => a - b);
    let smallestNumbers = [];

    for (let i = 0; i < 2; i++) {
        smallestNumbers.push(sortedArr[i]);
    }

    console.log(smallestNumbers.join(' '));
}
smallestTwoNumber([30, 15, 50, 5]);