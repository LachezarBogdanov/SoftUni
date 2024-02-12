function commonEl (arr1, arr2){

    let givenDigit = '';
    for(let i = 0; i < arr1.length; i++) {
        givenDigit = arr1[i];
        
        if(arr2.includes(givenDigit)) {
            console.log(givenDigit);
        }
    }

}
commonEl(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);