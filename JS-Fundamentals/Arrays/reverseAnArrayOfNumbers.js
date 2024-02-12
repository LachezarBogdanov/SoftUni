function reverseArray (num, arr){

    let newArray = arr.slice(0, num);
    console.log(newArray.reverse().join(' '));
}
reverseArray(3, [10, 20, 30, 40, 50]);