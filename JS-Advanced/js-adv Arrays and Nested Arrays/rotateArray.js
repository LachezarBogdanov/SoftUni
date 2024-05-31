function rotateArr (arr, n){

    for(let i = 0; i < n; i++) {
        for(let j = 0; j <= arr.length; j++) {
            let popedNum = arr.pop();
            arr.unshift(popedNum);
        }
    }
    console.log(arr.join(' '));
}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2);