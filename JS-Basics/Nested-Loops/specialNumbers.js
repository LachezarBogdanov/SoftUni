function specialNumbers (input){

    let num = Number(input[0]);
    let loopStart = 1111;
    let loopEnd = 9999;
    let result = '';

    for(let special = loopStart; special <= loopEnd; special++){
        let specialString = special.toString();
        let indexCount = 0;
        for(let i = 0; i < specialString.length; i++){
           let curNum = Number(specialString[i]);
           if(num % curNum === 0){
            indexCount++;
        }
        if(indexCount === 4){
            result += special + ' ';
        }
        }
    }
    console.log(result);
}
specialNumbers(["3"]);