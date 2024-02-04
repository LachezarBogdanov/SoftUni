function trainTheTrainers (input){

    let judgesCount = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let presentationCount = 0;
    let allGrades = 0;
    

    while(command !== 'Finish'){
        let presentationName = command;
        let gradeSum = 0;
       
        for(let curJudge = 1; curJudge <= judgesCount; curJudge++){
            let grade = Number(input[index]);
            index++;
            presentationCount++;
            gradeSum += grade;
            allGrades += grade;
        }
        let avgGrade = gradeSum / judgesCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        command = input[index];
        index++;
    }
    if(command === 'Finish'){
        let allAvg = allGrades / presentationCount;
        console.log(`Student's final assessment is ${allAvg.toFixed(2)}.`);
    }
}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);