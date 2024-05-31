function lowestPricesInCities (arr){

    let products = {};

    for (let townProduct of arr) {
        let [town, product, price] = townProduct.split(' | ');
        price = Number(price);
        if(!products.hasOwnProperty(product)) {
            products[product] = {town, price} ;
        } else {
            if(price < products[product].price) {
                products[product] = {town, price};
            }
        }
    }

    let entries = Object.entries(products);
    
    
    for (let [curProduct, info] of entries) {
        console.log(`${curProduct} -> ${info.price} (${info.town})`);
    }

}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);