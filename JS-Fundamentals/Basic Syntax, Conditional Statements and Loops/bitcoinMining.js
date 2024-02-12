function bitcoinMining(input){

    let curDay = 0;
    let firstBit = 0;
    let boughtBir = 0;
    let totalLv = 0;
    let oneBit = 11949.16;
    let oneGGOld = 67.51;
    let command = input.shift();
    

    while(command !== undefined) {
        curDay++;
        let digGold = command;
        
        if(curDay === 3) {
            digGold *= 0.7;
        }
        let moneyFromGOld = digGold * oneGGOld;
        totalLv += moneyFromGOld;

        if(totalLv >= 11949.16) {
        while(totalLv >= oneBit) {
            totalLv -= oneBit;
            if(firstBit === 0) {
                firstBit = curDay;
            }
            boughtBir++;
        }
    }

        command = input.shift();
    }

    console.log(`Bought bitcoins: ${boughtBir}`);
    if(boughtBir > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBit}`);
     }
    console.log(`Left money: ${totalLv.toFixed(2)} lv.`);
    
}
bitcoinMining([100, 200, 300]);