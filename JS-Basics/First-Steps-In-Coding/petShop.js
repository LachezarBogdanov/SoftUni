function petShop (input){

    let dogFood = Number (input[0]);
    let catFood = Number (input[1]);
    let totalDogFood = dogFood * 2.50;
    let totalCatFood = catFood * 4;
    let allAmount = totalCatFood + totalDogFood;
    console.log(allAmount);
}
petShop(["5 ",
"4 "]);