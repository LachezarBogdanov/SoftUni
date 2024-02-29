function sorting(arr) {

    let sortedArr = [];
    
    while (arr.length > 0) {
        let firstSort = arr.sort((a, b) => a - b);
        let firstEl = firstSort.pop();
        sortedArr.push(firstEl);
        let secondEl = firstSort.shift();
        sortedArr.push(secondEl)
    }

    console.log(sortedArr.join(' '));
    

}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);