function extractSubset (arr){

    let currentBiggest = Number.MIN_SAFE_INTEGER;
    let extracted = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= currentBiggest) {
            currentBiggest = arr[i];
            extracted.push(arr[i]);
        }
    }
    return extracted;

}
extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);