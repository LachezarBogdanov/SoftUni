function biggerHalf (arr){

    let sortedArr = arr.sort((a, b) => a - b);
    let halfNum = arr.length / 2;

    if(sortedArr.length % 2 !== 0) {
        halfNum = Math.ceil(halfNum);
        let slicedNums = sortedArr.splice(halfNum - 1);
       return slicedNums;
    }

    let slicedNums = sortedArr.splice(halfNum);
    return slicedNums;

}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);