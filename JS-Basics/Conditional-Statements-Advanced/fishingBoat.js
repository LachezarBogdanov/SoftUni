function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let priceBoat = 0;

    switch (season) {
        case 'Spring':
            priceBoat += 3000;
            break;

        case 'Summer':
        case 'Autumn':
            priceBoat += 4200;
            break;

        case 'Winter':
            priceBoat += 2600;
            break;
    }
        if (fisherCount <= 6) {
        priceBoat *= 0.9;
        } else if (fisherCount <= 11) {
        priceBoat *= 0.85;
        } else if (fisherCount > 12) {
        priceBoat *= 0.75;
         }
        
         if(season === 'Spring' || season === 'Summer' ||season === 'Winter') {
            if(fisherCount % 2 === 0) {
                priceBoat *= 0.95;
            }
         }  

    if (budget >= priceBoat) {
        let left = budget - priceBoat;
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
    } else if(budget < priceBoat) {
        let needed = priceBoat - budget;
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
    }


}
fishingBoat(["3000",
"Summer",
"11"]);
