function firstSumLast (arr){

    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.pop());

    console.log(firstNum + secondNum);

}
firstSumLast(['20', '30', '40']);