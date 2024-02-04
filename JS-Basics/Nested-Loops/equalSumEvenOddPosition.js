function equalSumsEvenOddPosition (input){

    let loopStart = Number(input[0]);
    let loopEnd = Number(input[1]);
    let result = '';
    
    

    for (let num = loopStart; num <= loopEnd; num++){
        let evenPositions = 0;
        let oddPositions = 0;
        let numToString = String(num);

        for (let i = 0; i < numToString.length; i++){
            let numString = Number(numToString[i]);
            let position = i + 1;

            if(position % 2 === 0){
                evenPositions += numString;
            }else {
                oddPositions += numString;
            }
        }
        if(evenPositions === oddPositions){
            result += numToString + ' ';
        }
        
    }
    console.log(result);
}
    equalSumsEvenOddPosition(["100000",
    "100050"]);