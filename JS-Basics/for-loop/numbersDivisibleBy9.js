function numDevBy9 (input){

    let loopStart = Number(input[0]);
    let loopEnd = Number(input[1]);
    let sumOfNumbers = 0;
    for(let current = loopStart; current <= loopEnd; current++){
        if(current % 9 == 0){
            sumOfNumbers += current;
           
          
        }
    }
     console.log(`The sum: ${sumOfNumbers}`);
       
     
        for(let current = loopStart; current <= loopEnd; current++){
            if(current % 9 == 0){
                console.log(current);
                
            }
        }
    
        
    }
    numDevBy9(["100", "200"]);