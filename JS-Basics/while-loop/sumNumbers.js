function sumNumbers (input){

    let goalNum = Number(input[0]);
    let index = 1;
    let indexNum = Number(input[index]);
    let numSum = 0;

    while(numSum < goalNum){
        numSum += indexNum;
        index++
        indexNum = Number(input[index]);
    }
    console.log(numSum);

}
sumNumbers(["100",
"10",
"20",
"30",
"40"]);