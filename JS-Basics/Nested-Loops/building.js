function building (input){

    let floors = Number(input[0]);
    let apartments = Number(input[1]);
    
    for(let i = floors; i >= 1; i--){
        let printLine = '';
        for(let a = 0; a < apartments; a++){
            if(i === floors){
                printLine += `L${i}${a}` + ' ';
            }else if(i % 2 === 0){
                printLine += `O${i}${a}` + ' ';
            }else {
                printLine += `A${i}${a}` + ' ';
            }
            
        }
        console.log(printLine);
    }
}
building(["6", "4"]);
