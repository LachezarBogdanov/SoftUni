function graduation (input){

    let name = input[0];
    let grade = 1;
    let gradesNumber = Number(input[grade]);
    let skusan = 0;
    let ocenka = 0;
    
    while(grade <= 12){
        if(gradesNumber >= 4){
            ocenka += gradesNumber;
        }else{
            skusan += 1;
        }

        if(skusan > 1){
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }
        grade++;
        gradesNumber = Number(input[grade]);
    }
    let avgGr = ocenka / 12;
    if(skusan < 2){
    console.log(`${name} graduated. Average grade: ${avgGr.toFixed(2)}`);
    }

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);