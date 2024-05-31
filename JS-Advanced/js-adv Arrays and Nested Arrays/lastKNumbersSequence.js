function lastKNumbersSequence(num1, num2) {
    let arr = [1];
    let sum = 0;
    let coco = arr.length;
    while (coco !== num1) {
        if (num2 > arr.length) {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            arr.push(sum);
            sum = 0;
            coco = arr.length;
        } else {
            let startIndex = arr.length - num2;
            for (let i = startIndex; i < arr.length; i++) {
                sum += arr[i]
            }
            arr.push(sum);
            sum = 0;
        }
        coco = arr.length;
    }
    return arr;
}
lastKNumbersSequence(6, 3);