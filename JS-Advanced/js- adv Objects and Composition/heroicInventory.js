function heroicInvantory (arr){

    let allHeroes = [];

    for (let hero of arr) {

        if(hero.trim() !== '') {
            let [curName, curLevel, allItems] = hero.split(' / ');
            curLevel = Number(curLevel);
            allItems = allItems ? allItems.split(', ') : [];
    
            allHeroes.push({ name: curName, level: curLevel, items: allItems });
        }
    }

    let json = JSON.stringify(allHeroes);
    console.log(json);

}
heroicInvantory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);