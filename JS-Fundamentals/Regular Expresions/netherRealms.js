function netherRealms(input) {
    let splitedStr = input.split(",").map(x => x.trim());
    splitedStr.sort((a, b) => a.localeCompare(b));
 
    let patternForHealth = /[^+\-*/.0-9\s,]/;
    let patternForNums = /[-]?[0-9]+[.]?[0-9]*/g;
    let patternMultDiv = /[*/]/g;
 
    for (let str of splitedStr) {
        let totalHealth = 0;
        let baseDamage = 0;
 
        for (let char of str) {
            if (patternForHealth.test(char)) {
                let charCode = char.charCodeAt(0);
                totalHealth += charCode;
            }
        }
 
        let numbersArr = str.match(patternForNums);
        let operatorsArr = str.match(patternMultDiv);
 
        if (numbersArr !== null) {
            numbersArr = numbersArr.map(Number);
            for (let num of numbersArr) {
                baseDamage += num;
            }
 
            if (operatorsArr !== null) {
                for (let operator of operatorsArr) {
                    switch (operator) {
                        case '*':
                            baseDamage *= 2;
                            break;
 
                        case '/':
                            baseDamage /= 2;
                            break;
                    }
                }
            }
        }
        console.log(`${str} - ${totalHealth} health, ${baseDamage.toFixed(2)} damage`);
    }
}
netherRealms('M3ph1st0**, Azazel');