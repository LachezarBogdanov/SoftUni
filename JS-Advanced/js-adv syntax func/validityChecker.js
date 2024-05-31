function validityChecker (x1, y1, x2, y2){

    function checker (x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    let firstCheck = Number.isInteger(checker(x1, y1, 0, 0)) === true ? 'valid' : 'invalid';
    let secondCheck = Number.isInteger(checker(x2, y2, 0, 0)) === true ? 'valid' : 'invalid';
    let thirdChek = Number.isInteger(checker(x1, y1, x2, y2)) === true ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {${'0'}, ${'0'}} is ${firstCheck}`);
    console.log(`{${x2}, ${y2}} to {${'0'}, ${'0'}} is ${secondCheck}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdChek}`);
    
}
validityChecker(3, 0, 0, 4);