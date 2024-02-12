function specialNumbers(n){

    let sum = 0;
    for(let i = 1; i <= n; i++) {
        let lastDigit = parseInt(i % 10);
        sum += lastDigit;
        if(i >= 10) {
            let firstDigit = parseInt(i / 10);
            sum += firstDigit;
        }
        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sum = 0;
    }
    
} 
specialNumbers(15);