function coins(input){

    let sumResto = Number(input[0]);
    let coins = 0;
    let cents = Math.floor(sumResto * 100);
    
        while(cents > 0){
        if(cents >= 200){
            cents -= 200;
        }else if(cents >= 100){
            cents -= 100;
        }else if(cents >= 50){
            cents -= 50;
        }else if(cents >= 20){
            cents -= 20;
        }else if(cents >= 10){
            cents -= 10;
        }else if(cents >= 5){
            cents -= 5;
        }else if(cents >= 2){
            cents -= 2;
        }else if(cents >= 1){
            cents -= 1;
        }
        coins++
        }
        console.log(coins);
    
    }
    coins(["1.23"]);