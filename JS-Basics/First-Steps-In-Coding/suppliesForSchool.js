function suppliesForSchool (input){

    let packagesOfPencils = Number (input [0]);
    let packeagesOfMarkers = Number (input[1]);
    let litersOfDetergent = Number (input[2]);
    let percentReduction = Number (input[3]);
    let percentUncount = percentReduction / 100;
    let allAmount = packagesOfPencils * 5.80 + packeagesOfMarkers * 7.20 + litersOfDetergent * 1.20;
    let allToPay = allAmount - (allAmount * percentUncount);
    console.log(allToPay);
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]);