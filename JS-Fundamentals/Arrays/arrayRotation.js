function arrayRotation (arr, rotation) {

    let numToArr = 0;
    for(let i = 0; i < rotation; i++) {
        numToArr = arr.shift();
        arr.push(numToArr);
    }
    console.log(arr.join(' '));
}
arrayRotation([2, 4, 15, 31], 5);