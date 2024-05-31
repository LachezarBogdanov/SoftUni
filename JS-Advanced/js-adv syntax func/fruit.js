function fruit (fruit, weight, priceOerKilo){

    let grams = weight / 1000;
    let price = grams * priceOerKilo;
    console.log(`I need $${price.toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80);