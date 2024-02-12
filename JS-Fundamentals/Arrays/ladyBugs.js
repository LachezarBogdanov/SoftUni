function ladyBugs (arr) {

    let fieldSize = arr[0];
    let ladyBugsIndx = arr[1].split(' ').map(Number);
    let field = [];
    
    for(let i = 0; i < fieldSize; i++) {
        if(ladyBugsIndx.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for(let j = 2; j < arr.length; j++) {
        let command = arr[j].split(' ');

        let ladyBugIndx = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if(!field[ladyBugIndx]) {
            continue;
        }

        field[ladyBugIndx] = 0;

        if(direction === 'left') {
            let newIndex = ladyBugIndx - flyLength;

            if(newIndex >= 0) {
                while(field[newIndex] === 1) {
                    newIndex -= flyLength;
                }

                if(newIndex >= 0) {
                    field[newIndex] = 1;
                }
            }
        } else {
            let newIndexPlus = ladyBugIndx + flyLength;

            if(newIndexPlus < field.length) {
                while(field[newIndexPlus] === 1) {
                    newIndexPlus += flyLength;
                }

                if(newIndexPlus < field.length) {
                    field[newIndexPlus] = 1;
                }
        }
    }
}
    console.log(field.join(' '));

}

ladyBugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]);