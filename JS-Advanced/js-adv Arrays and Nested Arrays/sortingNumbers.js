function sortingNumbers (arr){

    let sortToBiggest = arr.sort((a, b) => a - b).slice();
    let result = [];
    
    while(sortToBiggest.length > 0) {
        result.push(sortToBiggest.shift())
        result.push(sortToBiggest.pop())
    }
    return result;
}
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));