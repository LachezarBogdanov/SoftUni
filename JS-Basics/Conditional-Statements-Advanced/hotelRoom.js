function hotelRoom (input){

    let month = input[0];
    let sleepCount = Number(input[1]);
    let studioSleep = 0;
    let apartmentS = 0;
    
    switch(month){
        case 'May':
        case 'October':
            studioSleep = sleepCount * 50;
            apartmentS = sleepCount * 65;
            break;
    
        case 'June':
        case 'September':
            studioSleep = sleepCount * 75.20;
            apartmentS = sleepCount * 68.70;
            break;
    
        case 'July':
        case 'August':
            studioSleep = sleepCount * 76;
            apartmentS = sleepCount * 77;
            break;
    }
    
    if(sleepCount > 7 && sleepCount < 14 && (month === 'May' || month === 'October')){
        studioSleep *= 0.95;
    }else if(sleepCount > 14 && (month === 'May' || month === 'October')){
        studioSleep *= 0.70;
        apartmentS *= 0.9;
    }else if(sleepCount > 14 && (month === 'June' || month === 'September')){
        studioSleep *= 0.80;
        apartmentS *= 0.9;
    }else if(sleepCount > 14){
        apartmentS *= 0.9;
    }
    
    console.log(`Apartment: ${apartmentS.toFixed(2)} lv.`);    
    console.log(`Studio: ${studioSleep.toFixed(2)} lv.`);
    }
    hotelRoom(["May",
    "15"]);