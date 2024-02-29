function smallestTwoNumbers (arr){

    let sortedInAscending = arr.sort((a, b) => {return a * b});
    let smallestTwo = sortedInAscending.slice(0, 2);
    console.log(smallestTwo.join(' '));


}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);