function inventory(arr) {

    let heroes = [];

    for (let curRow of arr) {
        let curHero = curRow.split(' / ');
        let heroName = curHero[0];
        let heroLevel = curHero[1];
        let items = curHero[2];
        let hero = { name: heroName, level: heroLevel, items: items };

        heroes.push(hero);
    }

    let filteredHeroes = heroes.sort((a, b) => a.level - b.level);
    
    for (let curHero of filteredHeroes) {
        console.log(`Hero: ${curHero.name}\nlevel => ${curHero.level}\nitems => ${curHero.items}`);
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);