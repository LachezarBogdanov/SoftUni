function starEnigma (arr){

    let numberOfMes = Number(arr.shift());
    let pattern = /[star]/gi;
    let decryptedMsg = [];
    
    for(let i = 0; i < numberOfMes; i++) {
        let msg = arr[i];
        let decryptedMesage = '';
        
        let match = msg.match(pattern);
        
        if(match) {
            let count = match.length;
            
            for (let char of msg) {
                let code = char.charCodeAt();
                code -= count;
                
                let newChar = String.fromCharCode(code);
                decryptedMesage += newChar;
            }
            
        } else {
            decryptedMesage = msg;
        }
        decryptedMsg.push(decryptedMesage);
    }
    
    let secondPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attack>[AD])![^@\-!:>]*->(?<count>\d+)/;
    
    let attackedPl = [];
    let destroyedPl = [];

    for (let msg of decryptedMsg) {
        let match = msg.match(secondPattern);

        if(match) {
            let { name, attack } = match.groups;
            
            if(attack === 'A') {
                attackedPl.push(name);
            } else {
                destroyedPl.push(name);
            }
        }
    }
    attackedPl.sort((a,b) => a.localeCompare(b));
    destroyedPl.sort((a,b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPl.length}`);
    attackedPl.forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPl.length}`);
    destroyedPl.forEach(planet => console.log(`-> ${planet}`));

    

}
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']);