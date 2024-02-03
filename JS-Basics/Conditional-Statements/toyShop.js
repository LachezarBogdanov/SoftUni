function toyShop (input){

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollTalking = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    
    let moneyWon = puzzleCount * 2.60 + dollTalking * 3 + teddyBears * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCount = puzzleCount + dollTalking + teddyBears + minionsCount + trucksCount;
    
    if(toysCount >= 50){
        moneyWon *= 0.75; 
    }
     moneyWon *= 0.90;
    if(moneyWon >= tripPrice){
       let moneyLeft = moneyWon - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else{
        let moneyNeeded = tripPrice - moneyWon;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
    
    }
    toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);