function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');
    
    for (let digit of arr) {
        let tokens = digit.split(' ');

        let command = tokens.shift();
        
        if(command === 'Buy') {
            let equipment = tokens.shift();

            if(!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command === 'Trash'){
            let equipment = tokens.shift();

            if(inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                inventory.splice(idx, 1);
            }
        } else if(command === 'Repair') {
            let equipment = tokens.shift();

            if(inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                let element = inventory[idx];
                inventory.splice(idx, 1);
                inventory.push(element);
            }
        } else if(command === 'Upgrade'){
            
            let equipment = tokens.shift();
            let separatedEq = equipment.split('-');
            let lastEq = separatedEq.join(':');
            let element = separatedEq.shift();
            if(inventory.includes(element)) {
                
                let idx = inventory.indexOf(element);
                inventory.splice(idx + 1, 0, lastEq);
            }
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);