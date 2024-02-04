function sumOfNums (input){

    let loopStart = Number(input[0]);
    let loopEnd = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCount = 0;
    let sumOfNumbers = 0;

    for(let first = loopStart; first <= loopEnd; first++){
        for(let second = loopStart; second <= loopEnd; second++){
            combinationCount++;
            sumOfNumbers = first + second;
            if(sumOfNumbers === magicNum){
                console.log(`Combination N:${combinationCount} (${first} + ${second} = ${magicNum})`);
                return;   
        }
    }
}
console.log((`${combinationCount} combinations - neither equals ${magicNum}`));
}
sumOfNums(["1",
"10",
"5"]);