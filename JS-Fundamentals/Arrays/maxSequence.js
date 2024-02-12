function maxSequence (arr){

   
    let longestArr = [];

    for(let i = 0; i < arr.length; i++) {
        let longArr = [];
        let curNum = arr[i];
        longArr.push(curNum);

        for(let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];

            if(nextNum === curNum) {
                longArr.push(nextNum);
                
            } else {
                break;
            }
        }
        if(longArr.length > longestArr.length) {
            longestArr = longArr;
        }
    }
    console.log(longestArr.join(' '));

}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);