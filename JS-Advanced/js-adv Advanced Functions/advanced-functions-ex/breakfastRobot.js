function breakfastRobot (){

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function(order) {
        let commands = order.split(' ');

        if(commands.length === 1) {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }

        let [curCom, curRec, qty] = order.split(' ');

        if(curCom === 'restock') {
            let microelement = curRec;
            stock[microelement] += Number(qty);
            return 'Success'
        } else if(curCom === 'prepare') {
            let recipe = recipes[curRec];

            for (let ingrediante in recipe) {
                if(stock[ingrediante] < recipe[ingrediante] * Number(qty)) {
                    return `Error: not enough ${ingrediante} in stock`;
                }
            }

            for (let ingrediante in recipe) {
                stock[ingrediante] -= recipe[ingrediante] * Number(qty);
            }
            return 'Success';
        }
    }

}
let manager = breakfastRobot ();
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager ('restock carbohydrate 10'));
console.log(manager ('restock flavour 10'));
console.log(manager ('prepare apple 1'));
console.log(manager ('restock fat 10'));
console.log(manager ('prepare burger 1'));
console.log(manager ('report'));
