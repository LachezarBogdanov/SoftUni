function biggest (arr){

    let arrLength = arr.length;
    let biggestNum = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < arrLength; i++) {
        let curArr = arr[i];
        for (let j = 0; j < curArr.length; j++) {
            if(curArr[j] > biggestNum) {
                biggestNum = curArr[j];
            }
        }
    }

   return biggestNum;
}
biggest([[20, 50, 10],
    [8, 33, 145]]);