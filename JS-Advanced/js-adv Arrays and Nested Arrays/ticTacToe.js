function ticTacToe (arr){
    
    let table = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];
    
    let curCountMoves = 0;
    for (let i = 0; i < arr.length; i++) {
        let curPlayer = '';
        if(curCountMoves % 2 === 0) {
            curPlayer = 'X';
            let [firstIdx, secIdx] = arr[i].split(' ');
            firstIdx = Number(firstIdx);
            secIdx = Number(secIdx);

            if(table[firstIdx][secIdx] === false) {
                table[firstIdx][secIdx] = 'X';
            } else {
                console.log(`This place is already taken. Please choose another!`);
                continue;
            }

        } else {
            curPlayer = 'O';
            let [firstIdx, secIdx] = arr[i].split(' ');
            firstIdx = Number(firstIdx);
            secIdx = Number(secIdx);

            if(table[firstIdx][secIdx] === false) {
                table[firstIdx][secIdx] = 'O';
            } else {
                console.log(`This place is already taken. Please choose another!`);
                continue;
            }
        }
        
        let checkForWinner = checkWin(curPlayer, table);

        if(checkForWinner) {
            console.log(`Player ${curPlayer} wins!`);

            for (let arr of table) {
                console.log(arr.join('\t'));
            }
            return;
        }

        let counterForFalse = 0;
        for (let curArr of table) {
            if(!curArr.includes(false)){
                counterForFalse++;

                if(counterForFalse === table.length) {
                    console.log("The game ended! Nobody wins :(");
                    for (let arr of table) {
                        console.log(arr.join('\t'));
                    }
                     return;
                }
            }
        }
        curCountMoves++;
        }

        function checkWin(currentPlayer, table) {
            //check horizontal
            for(let i = 0; i < table.length; i++) {
                let counterForhorizontal = 0;
                let curArr = table[i];
                for(let curSymbol of curArr) {
                        if(currentPlayer === curSymbol) {
                            counterForhorizontal++;
                            
                            if(counterForhorizontal === table.length) {
                                return true;
                            }
                        }
                    }
                }
        
            // check verticaly
            for(let j = 0; j < table.length; j++) {
                    let counter = 0;
        
                    for(let i = 0; i < table.length; i++) {
                        if(table[i][j] === currentPlayer) {
                            counter++
        
                            if(counter === table.length) {
                                return true;
                            }
                        }
                    }
                }
        
            //check main diagonal
            let mainDiagonal = 0;
            for(let i = 0; i < table.length; i++) {
                    if(table[i][i] === currentPlayer) {
                        mainDiagonal++;
        
                        if(mainDiagonal === table.length) {
                            return true;
                        }
                    }
                }
                //check secondary diagonal
                let secondaryDiagonal = 0;
                for(let j = 0; j < table.length; j++) {
                    if(table[j][table.length - 1 - j] === currentPlayer) {
                        secondaryDiagonal++;
        
                        if(secondaryDiagonal === table.length) {
                            return true;
                        }
                    }
                }
        
                return false;
            }
}


ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);