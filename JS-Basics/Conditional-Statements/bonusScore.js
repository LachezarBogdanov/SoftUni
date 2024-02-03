function bonusScore (input){

    let points = Number(input[0]);
    let bonus = 0;
    if (points <= 100){
        bonus = 5;
    }else if(points <= 1000){
        bonus = 0.20 * points;
    }else {
        bonus = 0.10 * points;
    }
    if (points % 2 === 0){
        bonus += 1;
    }else if(points % 10 === 5){
        bonus += 2;
    }
    console.log(bonus);
    console.log(bonus + points);
    
    }
    bonusScore(["20"]);