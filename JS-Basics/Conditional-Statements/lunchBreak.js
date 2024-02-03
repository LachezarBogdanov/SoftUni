function lunchBreak (input){

    let seriesName = (input[0]);
    let episodeDuration = Number (input[1]);
    let restDuration = Number (input[2]);
    
    let lunchTime = 1 / 8 * restDuration;
    let restTime = 1 / 4 * restDuration;
    
    let timeLeft = restDuration - lunchTime - restTime;
    if (timeLeft >= episodeDuration){
        let timeL = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeL)} minutes free time.
        `);
    }else{
        let timeNeeded = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.
        `);
    }
    
    }
    lunchBreak(["Game of Thrones",
    "60",
    "96"]);