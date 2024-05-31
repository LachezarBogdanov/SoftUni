function evenPositionElement (arr){

    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            array.push(arr[i]);
        }
    }

    console.log(array.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);