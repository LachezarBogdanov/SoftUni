function autoEngineering (arr){

    let cars = new Map();

    for (let car of arr) {
        let [carBrand, carModel, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);

        if(!cars.has(carBrand)) {
            cars.set(carBrand, new Map() );
        } 
        
        if(!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, producedCars);
        } else {
            cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + producedCars)
        }
        
    }

for (let [carBrand, carArr] of cars) {
    console.log(carBrand);
    for (let curModel of carArr) {
        console.log(`###${curModel[0]} -> ${curModel[1]}`);
    }
}
}

autoEngineering(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);