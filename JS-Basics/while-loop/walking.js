function steps (input){
    let totalSteps = 0;
    let stepsGoal = 10000;

    let command = input[0];
    let index = 1;

    while(command !== 'Going home'){
        let steps = Number(command);
        totalSteps += steps;

        if(totalSteps >= stepsGoal){
            let diffSteps = totalSteps - stepsGoal;
            console.log("Goal reached! Good job!" );
            console.log(`${diffSteps} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
    if(command === 'Going home'){
        let stepsGoingHome = Number(input[index]);
        totalSteps += stepsGoingHome;
        if(totalSteps >= stepsGoal){
            let diffSteps = totalSteps - stepsGoal;
            console.log("Goal reached! Good job!" );
            console.log(`${diffSteps} steps over the goal!`);
        }else if(totalSteps < stepsGoal){
            let diffSteps2 = stepsGoal - totalSteps;
            console.log(`${diffSteps2} more steps to reach goal.`);
        }
    }

}
steps(["1000",
"1500",
"2000",
"6500"]);
