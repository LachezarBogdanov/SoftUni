function condenseArr (input){

    while(input.length > 1) {
        let newArr = [];

        for(let i = 0; i < input.length - 1; i++) {
            newArr.push(input[i] + input[i + 1]);
        }
        input = newArr;
    }
    console.log(input[0]);
   

   
}
condenseArr([2,10,3]);