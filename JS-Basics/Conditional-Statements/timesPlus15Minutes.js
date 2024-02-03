function timePlus15Min (input){
    let hour = Number(input[0]);
    let min = Number(input[1]);
    
    let totalTime = hour * 60 + min + 15;
    let hourTime = Math.floor(totalTime / 60);
    let minTime = totalTime % 60;
    
    if (hourTime === 24){
        hourTime = 0;
    }
    if (minTime < 10){
        console.log(`${hourTime}:0${minTime}`);
    }else {
        console.log(`${hourTime}:${minTime}`);
    }
}
timePlus15Min(["1", "46"]);