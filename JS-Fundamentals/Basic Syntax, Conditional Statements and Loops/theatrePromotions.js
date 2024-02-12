function theatrePromotions(day, age){

    let dayType = day;
    let ageType = age;
    let price = 0;

    if(dayType === 'Weekday' && ageType <= 18 && ageType >= 0) {
        price = 12;
    } else if(dayType === 'Weekday' && ageType <= 64 && ageType >= 0) {
        price = 18;
    } else if(dayType === 'Weekday' && ageType <= 122 && ageType >= 0) {
        price = 12;
    }  else if(dayType === 'Weekend' && ageType <= 18 && ageType >= 0) {
        price = 15;
    }  else if(dayType === 'Weekend' && ageType <= 64 && ageType >= 0) {
        price = 20;
    }  else if(dayType === 'Weekend' && ageType <= 122 && ageType >= 0) {
        price = 15;
    }  else if(dayType === 'Holiday' && ageType <= 18 && ageType >= 0) {
        price = 5;
    }  else if(dayType === 'Holiday' && ageType <= 64 && ageType >= 0) {
        price = 12;
    }  else if(dayType === 'Holiday' && ageType <= 122 && ageType >= 0) {
        price = 10;
    } else {
        console.log('Error!');
        return;
    }
    console.log(price + '$');
}
theatrePromotions('Weekday', 
42);