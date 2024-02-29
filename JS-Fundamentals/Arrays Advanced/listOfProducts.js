function listOfProducts (arr){

    let sortProducts = arr.sort();
    let sortedFunc = sorted(sortProducts);
    
    function sorted (arr){
        for(let i = 0; i < arr.length; i++) {
            console.log(`${i + 1}.${arr[i]}`);
        }
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples']);