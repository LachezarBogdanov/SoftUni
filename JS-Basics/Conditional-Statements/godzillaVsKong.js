function goddzilaVsKong(input) {

    let filmBudget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let costumePricePerOne = Number(input[2]);

    let decorPrice = 0.1 * filmBudget;
    let allCostumePrice = extrasCount * costumePricePerOne;

    if (extrasCount > 150) {
        allCostumePrice *= 0.9
    }
    let allAmount = decorPrice + allCostumePrice;
    if (allAmount > filmBudget) {
        let moneyNeeded = allAmount - filmBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else if (allAmount <= filmBudget) {
        let moneyLeft = filmBudget - allAmount;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }


}
goddzilaVsKong(["20000",
"120",
"55.5"]);