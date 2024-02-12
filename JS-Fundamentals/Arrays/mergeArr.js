function mergeArr (arr1, arr2) {

    let firstEl = '';
    let secondEl = '';
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        firstEl = arr1[i];
        secondEl = arr2[i];

        if (i % 2 === 0) {
            firstEl = Number(firstEl);
            secondEl = Number(secondEl);
            newArr.push(firstEl + secondEl);
        } else {
            newArr.push(firstEl + secondEl);
        }
    }

    console.log(newArr.join(' - '));
}
mergeArr(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);