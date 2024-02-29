function houseParty(arr) {

    let guest = [];

    for (let command of arr) {
        let curCommand = command.split(' ');
        let name = curCommand[0];

        if(command.includes('not')) {
            if(guest.includes(name)) {
                let idxOfName = guest.indexOf(name);
                guest.splice(idxOfName, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if(!guest.includes(name)) {
                guest.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }
    console.log(guest.join('\n'));


}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);