function lettersChangeNumbers (str){

    let strOneAndTwo = str.split(/\s+/);
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let result = 0;

    
     for (let curStr of strOneAndTwo) {
        let firstLetter = '';
        let secondLetter = '';
        let number = '';
            for (let i = 0; i < curStr.length; i++) {
                if(!isNaN(curStr[i])) {
                    number += curStr[i];
                } else {
                    if(i > 0) {
                        secondLetter += curStr[i];
                    } else {
                        firstLetter += curStr[i];
                    }
                }
            }

            number = Number(number);
            if(firstLetter === firstLetter.toUpperCase()) {
                firstLetter = firstLetter.toLowerCase();
                let idxOfLetter = alphabet.indexOf(firstLetter);
                idxOfLetter++;
                number /= idxOfLetter;
            } else {
                let idxOfLet = alphabet.indexOf(firstLetter);
                idxOfLet++;
                number *= idxOfLet;
            }

            if(secondLetter === secondLetter.toUpperCase()) {
                secondLetter = secondLetter.toLowerCase();
                let idx = alphabet.indexOf(secondLetter);
                idx++;
                number -= idx;
            } else {
                let idx = alphabet.indexOf(secondLetter);
                idx++;
                number += idx;
            }
            
            result += number;
     }

     console.log(result.toFixed(2));
        
    } 
lettersChangeNumbers('P34562Z q2576f   H456z');