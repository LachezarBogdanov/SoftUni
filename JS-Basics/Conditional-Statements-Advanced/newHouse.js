function newHouse(input) {

    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let obshto = 0;

    switch(flowersType) {
        case 'Roses':
           obshto = flowersCount * 5;
           if(flowersCount > 80) {
            obshto *= 0.9;
           }
        break;
         case 'Dahlias':
               obshto = flowersCount * 3.8;
               if(flowersCount > 90) {
                obshto *= 0.85;
               }
        break;
         case 'Tulips':
            obshto = flowersCount * 2.8;
            if(flowersCount > 80) {
                obshto *= 0.85;
            }
        break;
         case 'Narcissus':
            obshto = flowersCount * 3;
            if(flowersCount < 120) {
                obshto *= 1.15;
            }
        break;
      case 'Gladiolus':
           obshto = flowersCount * 2.5;
           if(flowersCount < 80) {
            obshto *= 1.2;
           }
        break;
    }

    if(budget >= obshto) {
        let ostanala = budget - obshto;
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${ostanala.toFixed(2)} leva left.`);
    } else if(budget < obshto) {
        let needed = obshto - budget;
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses",
"55",
"250"]);
