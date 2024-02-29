function catalogue (arr) {

    let catalogue = [];
    for (let row of arr) {
        let [name, price] = row.split(' : ');
        
        let obj = {name, price};
        catalogue.push(obj);
        
    }
    
    let sortedCatalogue = catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let curLetter = '';
    for (let curObj of sortedCatalogue) {
        let firstLetter = curObj.name[0];

        if(firstLetter !== curLetter) {
            curLetter = firstLetter;
            console.log(firstLetter);
        }
        console.log(`${curObj.name}: ${curObj.price}`);
        
    }   

}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );