function spiceMustFlow(startingYield){

    let days = 0;
    let spiceExtracted = 0;
    
    while(startingYield >= 100) {
        days++;
        spiceExtracted += startingYield;
        
        if(spiceExtracted >= 26) {
            spiceExtracted -= 26;
        }
        startingYield -= 10;

    }

    if(spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }

    console.log(days);
    console.log(spiceExtracted);
    
}  
spiceMustFlow(111);