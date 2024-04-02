function storage(arr) {

    let map = new Map();

    for (let token of arr) {
        let curToken = token.split(' ');
        let product = curToken[0];
        let qty = Number(curToken[1]);

        if(!map.has(product)) {
            map.set(product, qty);
        } else {
            let curQty = map.get(product);
            let newQty = curQty + qty;
            map.set(product, newQty);
        }
    }

    for (let curProduct of map) {
        console.log(`${curProduct[0]} -> ${curProduct[1]}`);
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);