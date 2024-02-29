function processOddNumbers (arr){

    let checkedNums = checkNum(arr);
    console.log(checkedNums.reverse().join(' '));

    function checkNum (arr){
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            if(i % 2 !== 0){
                let curNum = arr[i];
                newArr.push(curNum * 2);
            }
        }
        return newArr;
    }
}
processOddNumbers([10, 15, 20, 25]);