function carFactory (car){

    let engines =   {SmallEngine: { power: 90, volume: 1800 },
                    NormalEngine: { power: 120, volume: 2400 },
                    MonsterEngine: { power: 200, volume: 3500 }
                };

    let res = { model: car.model,
    engine: null,
    carriage: null,
    wheels: null };
    
    if(car.power <= 90) {
        res.engine = engines.SmallEngine;
    } else if(car.power <= 120) {
        res.engine = engines.NormalEngine;
    } else if(car.power <= 200) {
        res.engine = engines.MonsterEngine;
    }

    let carriageFactory = (type, color) =>  {
        let result = {
            type,
            color
        }
        return result
    }

    res.carriage = carriageFactory(car.carriage, car.color);

    let wheelSizeCheck = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;

    res.wheels = new Array(4).fill(wheelSizeCheck);
    

    return res
}
let curCar = carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });

  console.log(res);