function fishTank (input){

    let lenghtCm = Number (input[0]);
    let  widthCm = Number (input[1]);
    let  highCm = Number (input[2]);
    let  perCent = Number (input[3]);
    let perCentlitre = perCent / 100;
    let aquariumVolume = lenghtCm * widthCm * highCm;
    let aquariumLitreVolume = aquariumVolume / 1000;
    let neededLitre = aquariumLitreVolume * (1 - perCentlitre);
    console.log(neededLitre);  
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]);