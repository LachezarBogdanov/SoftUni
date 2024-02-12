function x(arr) {
    let no = true;
    for (let i = 0; i <= arr.length - 1; i++) {
        let left = true;
        let rightResult = 0;
        let leftResult = 0;
        for (let j = 0; j <= arr.length - 1; j++) {
            if (i === j) {
                left = false;
                continue;
            }
            if (left === false) {
                rightResult += arr[j]
            }
            else if (left === true) {
                leftResult += arr[j]
            }
        }
        if (leftResult === rightResult) {
            console.log(i);
            no = false;
            break;
        }
    }
    if (no === true) {
        console.log('no');
    }
}

x([1, 2, 3, 3]);