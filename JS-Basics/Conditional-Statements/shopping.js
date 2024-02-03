function shopping (input) {

    let petarBudget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let procesorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);
    
    let videoCardsSum = videoCardsCount * 250;
    let procesorsPrice = 0.35 * videoCardsSum;
    let allProcesorsSum = procesorsCount * procesorsPrice;
    let ramMemoryPrice = 0.10 * videoCardsSum;
    let allRamMemorySum = ramMemoryCount * ramMemoryPrice;
    
    let allAmount = videoCardsSum + allProcesorsSum + allRamMemorySum;
    
    if(videoCardsCount > procesorsCount){
        allAmount *= 0.85 
    }
    
    if (petarBudget >= allAmount){
        let moneyLeft = petarBudget - allAmount;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }else if (allAmount > petarBudget){
        let moneyNeeded = allAmount - petarBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["900",
"2",
"1",
"3"]);