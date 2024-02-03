function oscars (input){
    
    let actorName = input[0];
    let pointFormAcademy = Number(input[1]);
    let ocenqvashtiCount = Number(input[2]);
     
        for(let i = 3; i <= ocenqvashtiCount * 2 +2; i += 2){
            let judjeName = input[i];
            let judjePoints = input[i + 1];
    
            let pointsWon = ((judjeName.length * judjePoints) / 2);
            pointFormAcademy += pointsWon;
    
            if(pointFormAcademy > 1250.5){
                console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointFormAcademy.toFixed(1)}!`);
                break;
            }
        }
        if (pointFormAcademy <= 1250.5){
            let pointsNeeded = 1250.5 - pointFormAcademy;
            console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
        }
    
    
    
    }
    oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);