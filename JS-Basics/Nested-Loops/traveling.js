function traveling (input){

    let command = input[0];
    let index = 1;
    let saveMoney = 0;
    
    while(command !== 'End'){
        saveMoney = 0;
        let budget = Number(input[index]);
        index++;

        while(saveMoney !== budget){
            let money = Number(input[index]);
            saveMoney += money;
            
            index++;
            if(saveMoney >= budget){
                console.log(`Going to ${command}!`);
                break;
            }
        }
        command = input[index];
        index++;
    }   
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);
