function storeCatalogue (arr){

    let products = {};

    for (let product of arr) {
            let [curPr, price] = product.split(' : ');
            products[curPr] = Number(price);
    }

    let ent = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]));
    let char = '';
    for (let curPr of ent) {
        let [prName, prPrice] = curPr;

        if(prName.charAt(0) !== char) {
            char = prName.charAt(0);
            console.log(char);
        }
        console.log(`  ${prName}: ${prPrice}`);
    }

}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);