function cardGame (arr){

    let powerOfType = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    let persons = {};

    let pesonPowerAndTypes = {};

    for (let curPerson of arr) {
        let [name, cards] = curPerson.split(': ');
        let arrOfCards = cards.split(', ');

        for (let curCard of arrOfCards) {
            let result = 0;
            if (name in pesonPowerAndTypes) {
                if (pesonPowerAndTypes[name].includes(curCard)) {
                    continue;
                } else {
                    pesonPowerAndTypes[name].push(curCard);
                }
            } else {
                pesonPowerAndTypes[name] = [curCard];
            }
            
            let arrOfCurCard = curCard.split('');
            let typeOfCard = arrOfCurCard.pop();
            let power = arrOfCurCard.join('');

            if(power === 'J') {
                power = '11';
            } else if(power === 'Q') {
                power = '12';
            } else if(power === 'K') {
                power = '13';
            } else if(power === 'A') {
                power = '14';
            }

            power = Number(power);

            let powerFromType = powerOfType[typeOfCard];
            result = power * powerFromType;

            if(name in persons) {
                persons[name] += result;
            } else {
                persons[name] = result;
            }
        }

    }
    
    let entries = Object.entries(persons).forEach(el => console.log(`${el[0]}: ${el[1]}`));

}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);