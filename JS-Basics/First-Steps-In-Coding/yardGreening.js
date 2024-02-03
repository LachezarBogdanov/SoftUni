function yardGreening (input){

    let squeareMetre = Number (input [0]);
    let pricePerSquare = 7.61;
    let priceForSquareMetres = squeareMetre * pricePerSquare;
    let discount = 0.18 * priceForSquareMetres;
    let allAmount = priceForSquareMetres - discount;
    console.log(`The final price is: ${allAmount} lv.\nThe discount is: ${discount} lv.`);
}
yardGreening(["550"]);