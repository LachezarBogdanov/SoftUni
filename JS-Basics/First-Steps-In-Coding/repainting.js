function repainting(input) {
    // Parse input values into numbers
    let safetyNailon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);
    let bags = 0.40;

    // Calculate prices
    let safetyNailonPrice = (safetyNailon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.1)) * 14.50;
    let paintAddPrice = paintThinner * 5;
    let material = safetyNailonPrice + paintPrice + paintAddPrice + bags;
    let workMoney = (material * 0.30) * hours;
    let totalSum = material + workMoney;

    console.log(totalSum);
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]);