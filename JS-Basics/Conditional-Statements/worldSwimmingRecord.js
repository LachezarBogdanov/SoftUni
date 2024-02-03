function worldSwimmingRecord (input){

    let recordInSeconds = Number (input[0]);
    let distanceInMetre = Number (input[1]);
    let secondsForOneMetre = Number (input[2]);
    
    
    let ivanSwimmingTime = secondsForOneMetre * distanceInMetre;
    let addedTimeForMetre = Math.floor((distanceInMetre / 15)) * 12.5;
    
    let ivanTotalTime = ivanSwimmingTime + addedTimeForMetre;
    
    if (ivanTotalTime < recordInSeconds){
        console.log(` Yes, he succeeded! The new world record is ${ivanTotalTime.toFixed(2)} seconds.`);
    }else{
        let secondsNeeded = ivanTotalTime - recordInSeconds;
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    }
    }
    worldSwimmingRecord(["10464",
    "1500",
    "20"]);