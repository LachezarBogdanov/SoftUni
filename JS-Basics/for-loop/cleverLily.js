function cleverLili (input){

    let age = Number(input[0]);
    let washer = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savedMoney = 0;
    let presentMoney = 10;
    
        for(let i = 1; i <= age; i++){
            if(i % 2 === 0){
                savedMoney += (presentMoney - 1);
                presentMoney += 10;
            }else {
                savedMoney += toyPrice;
            }
            
        }
    
        if(savedMoney >= washer){
            let moneyS = savedMoney - washer;
            console.log(`Yes! ${moneyS.toFixed(2)}`);
        }else {
            let moneyNeeded = washer - savedMoney;
            console.log(`No! ${moneyNeeded.toFixed(2)}`);
        }
    
    }
    cleverLili(["10",
    "170.00",
    "6"]);