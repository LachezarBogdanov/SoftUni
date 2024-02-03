function tennisRanglist (input){

    let turnirCount = Number(input[0]);
    let starterPoints = Number(input[1]);
    
    let allPoints = 0;
    let w = 0;
    let f = 0;
    let sF = 0;
    let winTournir = 0;
    
    
        for(let i = 2; i <= turnirCount + 1; i++){
            let turnir = input[i];
            if(turnir === 'W'){
                starterPoints += 2000;
                w += 1;
                winTournir += 1;
            }else if(turnir === 'F'){
                starterPoints += 1200;
                f += 1;
            }else if(turnir === 'SF'){
                starterPoints += 720;
                sF += 1;
            }
            allPoints = starterPoints;
        }
     let averagePoints = ((f * 1200) + (sF * 720) + (w * 2000)) / turnirCount;
     let winTournirPerCent = (winTournir / turnirCount) * 100;
    
     console.log(`Final points: ${allPoints}`);
     console.log(`Average points: ${Math.floor(averagePoints)}`);
     console.log(`${winTournirPerCent.toFixed(2)}%`);
        
    
     }
     tennisRanglist(["5"
     "1400",
     "F",
     "SF",
     "W",
     "W",
     "SF"]);