function juiceFlavours (arr){
    let bottles = new Map();
    let flavours = {};

   for (let curF of arr) {
    let [curJuice, qty] = curF.split(' => ');
    qty = Number(qty);
    if(!flavours.hasOwnProperty(curJuice)) {
        flavours[curJuice] = 0;
    }
    flavours[curJuice] += qty;

    if(flavours[curJuice] >= 1000) {
        let bottlesToAdd = Math.floor(flavours[curJuice] / 1000);
        flavours[curJuice] -= bottlesToAdd * 1000;

        if(!bottles.has(curJuice)) {
            bottles.set(curJuice, bottlesToAdd);
        } else {
            bottles.set(curJuice, bottles.get(curJuice) + bottlesToAdd);
        }
    } 
   }

   for (let [flavour, bottleQty] of bottles) {
        console.log(`${flavour} => ${bottleQty}`);
   }
}
juiceFlavours(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);