function dungeonestDark (arr) {

    let arrInfo = arr.shift();
    let newArr = arrInfo.split('|');
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    
    
    for (let typeInRoom of newArr) {
        let withSpace = typeInRoom.split(' ');

        let command = withSpace[0];
        let num = Number(withSpace[1]);
        

        if(command === 'potion') {
            let givedHealth = num;
            
            if(health + givedHealth > 100) {
                givedHealth = 100 - health;
            }
            
            health += givedHealth;
            console.log(`You healed for ${givedHealth} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if(command === 'chest') {
            console.log(`You found ${num} coins.`);
            coins += num;
        } else {
            let monsterName = command;
            let monsterAttack = num;

            health -= monsterAttack;
            if(health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
        bestRoom++;
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);