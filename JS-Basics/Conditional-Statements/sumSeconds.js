function sumSeconds (input){

    time1 = Number(input[0]);
    time2 = Number(input[1]);
    time3 = Number(input[2]);
    let totalTime = time1 + time2 + time3;
    let minutesTime = Math.floor(totalTime / 60);
    let secondsTime = totalTime % 60;
    
    if(secondsTime < 10){
        console.log(`${minutesTime}:0${secondsTime}`);
    }else{
        console.log(`${minutesTime}:${secondsTime}`);
    }
    }
    sumSeconds(["35",
    "45",
    "44"]);