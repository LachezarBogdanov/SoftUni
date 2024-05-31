function stringLength(first, second, third) {

    let sum = 0;
    sum += first.length + second.length + third.length;
    let avgSum = 0;
    avgSum = sum / 3;
    console.log(sum);
    console.log(Math.floor(avgSum));

}
stringLength('pasta', '5', '22.3');