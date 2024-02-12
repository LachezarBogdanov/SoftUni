function triplesOfLatinLetters(n){

    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';
    for(let i = 0; i < n; i++) {
         firstLetter = String.fromCharCode(97+i);
         for(let d = 0; d < n; d++) {
            secondLetter = String.fromCharCode(97+d);
            for(let m = 0; m < n; m++) {
                thirdLetter = String.fromCharCode(97+m);
                console.log(firstLetter+secondLetter+thirdLetter);
            }
            } 
               
        } 
        
    
}
triplesOfLatinLetters('3');