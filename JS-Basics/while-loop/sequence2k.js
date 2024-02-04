function sequence (input){

    let number = Number(input[0]);
    let n = 1;
    while(n <= number){
        console.log(n);
        n = n * 2 + 1;
    }
   

}
sequence(["3"]);