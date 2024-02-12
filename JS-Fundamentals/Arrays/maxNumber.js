function maxNumber (input) {

    let newArr = [];

    for(let i = 0; i < input.length; i++) {
        let isTop = true;
        let curNum = input[i];

        for(let j = i + 1; j < input.length; j++) {
            let rightNum = input[j];

            if(curNum <= rightNum) {
                isTop = false;
                break;
            }
        }
        if(isTop) {
           newArr.push(curNum);
        }
    }
    console.log(newArr.join(' '));

}
maxNumber([41, 41, 34, 20]);