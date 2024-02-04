function examPreparation (input){

    let maxBadGrade = Number(input[0]);
    
    let command = input[1];
    let index = 2;
    let badGrade = 0;
    let gradeSum = 0;
    let allSum = 0;
    let lastEx = '';
    

    while (command !== 'Enough'){
       
         let grade = Number(input[index]);
        index++

        if(grade <= 4){
            badGrade++
        }
        if(badGrade === maxBadGrade){
            console.log(`You need a break, ${badGrade} poor grades.`);
            break;
        }
        gradeSum += grade;
        allSum++
        lastEx = command;
        
        command = input[index];
        index++
        
    }

    if(command === 'Enough'){
        let avgGr = gradeSum / allSum;
        console.log(`Average score: ${avgGr.toFixed(2)}`);
        console.log(`Number of problems: ${allSum}`);
        console.log(`Last problem: ${lastEx}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);