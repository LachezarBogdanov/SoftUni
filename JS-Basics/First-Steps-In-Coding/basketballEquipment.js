function basketballEquipment (input){

    let yearlyPay = Number (input [0]);
    let basketballShoes = (60 / 100) * yearlyPay;
    let basketballoutfit = (80 / 100) * basketballShoes;
    let ball = (1 / 4) * basketballoutfit;
    let basketballacessories = (1 / 5) * ball;
    
    let allAmount = yearlyPay + basketballShoes + basketballoutfit + basketballacessories + ball;
    console.log(allAmount);
}
basketballEquipment(["365 "]);