function storeProvision(stock, delivery) {

    let products = [];

    for (let i = 0; i < stock.length; i += 2) {
        let curPr = stock[i];
        let qtyOfPr = Number(stock[i + 1]);
        let curRowProduct = { name: curPr, qty: qtyOfPr };
        products.push(curRowProduct);
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let curPr = delivery[i];
        let qtyOfPr = Number(delivery[i + 1]);

        let foundProduct = products.find((el) => el.name === curPr);

        if (foundProduct) {
            foundProduct.qty += qtyOfPr;
        } else {
            let curRowProduct = { name: curPr, qty: qtyOfPr };
            products.push(curRowProduct);
        }
    }
    
    for (let curPr of products) {
        console.log(`${curPr.name} -> ${curPr.qty}`);
    }
    

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);