function onTimeForExam (input){

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let totalExamtime = examHour * 60 + examMinute;
    let totalArrivalTime = arrivalHour * 60 + arrivalMinute;

    let totalDiffTime = Math.abs(totalExamtime - totalArrivalTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;

    if(totalExamtime === totalArrivalTime){
        console.log('On time');
    }else if(totalExamtime < totalArrivalTime){
        console.log('Late');

        if(totalDiffTime < 60){
            console.log(`${totalDiffTime} minutes after the start`);
        }else {
            if(diffMin < 10){
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            }else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    }else {
        if(totalDiffTime <= 30){
            console.log('On time');
            console.log(`${totalDiffTime} minutes before the start`);
        }else{
            console.log('Early');

            if(totalDiffTime < 60){
                console.log(`${totalDiffTime} minutes before the start`);
            }else {
                if(diffMin < 10){
                    console.log(`${diffHour}:0${diffMin} hours before the start`);
                }else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }
            }
        }
    }
}
onTimeForExam(["9",
"30",
"9",
"50"]);