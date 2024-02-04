function vacation (input){

    let moneyNeeded = Number(input[0]);
    let moneyNow = Number(input[1]);

    let index = 2;
    let spendDays = 0;
    let daysAgo = 0;
    
   let spendOrSave = input[index];
   index++;

    while (true){
        
        let sum = Number(input[index]);
        index++;
        daysAgo++;

        if(spendOrSave === 'spend'){
            moneyNow -= sum;
            spendDays++;
        }else if(spendOrSave === 'save'){
            moneyNow += sum;
        }
        if(moneyNow < 0){
            moneyNow = 0;
        }
        
        if(spendDays >= 5){
            console.log("You can't save the money.");
            console.log(`${spendDays}`);
            return;
        }
        
        if(moneyNow >= moneyNeeded){
            console.log(`You saved the money for ${daysAgo} days.`);
            return;
        }
        
        spendOrSave = input[index];
        index++;
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);