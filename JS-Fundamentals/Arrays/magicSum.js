function magicSum (arr, sum){

    for(let i = 0; i < arr.length; i++) {
        let numbersSum = 0;
        let curNum = arr[i];

        for(let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            numbersSum = curNum + nextNum;

            if(numbersSum === sum) {
                console.log(curNum + ' ' + nextNum);
            }
        }
    }

}
magicSum([1, 2, 3, 4, 5, 6], 6);