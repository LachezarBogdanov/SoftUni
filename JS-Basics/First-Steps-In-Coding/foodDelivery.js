function foodDelivery (input){

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);
    let chickenSum = chickenMenus * 10.35;
    let fishSum = fishMenus * 12.40;
    let veganSum = veganMenus * 8.15;
    let allAmount = chickenSum + fishSum + veganSum;
    let dessert = 0.2 * allAmount
    let allSum = allAmount + dessert + 2.5;
    console.log(allSum);
}
foodDelivery(["2 ",
"4 ",
"3 "]);