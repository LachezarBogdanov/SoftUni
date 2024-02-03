function skiTrip(input){

    let daysIn = Number(input[0]);
    let roomtype = input[1];
    let opinion = input[2];
    let sleepCount = daysIn - 1;
    let price = 0;
    
    switch (roomtype){
        case 'room for one person':
            price = sleepCount * 18;
            break;
    
        case 'apartment':
            price = sleepCount * 25;
            if(sleepCount < 10){
            price *= 0.7;
            }else if(sleepCount <=15){
                price *= 0.65;
            }else {
                price *= 0.5;
            }
            break;
    
        case 'president apartment':
            price = sleepCount * 35;
            if(sleepCount < 10){
                price *= 0.9;
            }else if(sleepCount <= 15){
                price *= 0.85;
            }else {
                price *= 0.8;
            }
            break;
    }
    if(opinion === 'positive'){
        price *= 1.25;
    }else {
        price *= 0.9;
    }
    
    console.log(price.toFixed(2));
}
skiTrip(["14",
"apartment",
"positive"]);