function journey (input){

    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let house = '';
    
    if(budget <= 100 && season === 'summer'){
        budget *= 0.30;
        destination = 'Bulgaria';
        house = 'Camp';
    }else if(budget <= 100 && season === 'winter'){
        budget *= 0.70;
        destination = 'Bulgaria';
        house = 'Hotel';
    }else if(budget <= 1000 && season === 'summer'){
        budget *= 0.40;
        destination = 'Balkans';
        house = 'Camp';
    }else if(budget <= 1000 && season === 'winter'){
        budget *= 0.80;
        destination = 'Balkans';
        house = 'Hotel';
    }else {
        budget *= 0.90;
        destination = 'Europe';
        house = 'Hotel';
    }
    console.log(`Somewhere in ${destination} `);
    console.log(`${house} - ${budget.toFixed(2)}`);
    }
    journey(["50", "summer"]);