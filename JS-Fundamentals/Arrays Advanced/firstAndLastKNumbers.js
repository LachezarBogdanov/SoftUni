function firstAndLastKNumbers (arr){

    let numsToPrint = arr[0];

    let firstNums = arr.slice(1, numsToPrint + 1);
    let secondNums = arr.slice(-numsToPrint);

    console.log(firstNums.join(' '));
    console.log(secondNums.join(' '));


}
firstAndLastKNumbers([3,
    6, 7, 8, 9]);