function sumFirstAndLast (arr) {

    let firstNum = arr.shift();
    let lastNum = arr.pop();

    console.log(Number(firstNum) + Number(lastNum));

}
sumFirstAndLast(['20', '30', '40']);