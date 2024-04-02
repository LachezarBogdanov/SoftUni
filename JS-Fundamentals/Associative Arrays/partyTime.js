function partyTime (arr){
    
    let vip = [];
    let regular = [];

    let curGuestList = arr.shift();
    while(curGuestList !== 'PARTY') {
        let regex = /^[0-9]/;
        let result = regex.test(curGuestList);
        
        if(result === true) {
            vip.push(curGuestList);
        } else {
            regular.push(curGuestList);
        }

        curGuestList = arr.shift();
    }

    
    let index = 0;

    while(index < arr.length) {
        let secondTimeRound = arr[index];
            if(vip.includes(secondTimeRound)) {
                let indexOfCode = vip.indexOf(secondTimeRound);
                vip.splice(indexOfCode, 1);
            } else if(regular.includes(secondTimeRound)) {
                let indexOfCode = regular.indexOf(secondTimeRound);
                regular.splice(indexOfCode, 1);
            }
            index++;
        }
    

    let allGuests = [];

    for (let curGuest of vip) {
        allGuests.push(curGuest);
    }
    for (let curGuest of regular) {
        allGuests.push(curGuest);
    }

    console.log(allGuests.length);
    console.log(allGuests.join('\n'));

    
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);