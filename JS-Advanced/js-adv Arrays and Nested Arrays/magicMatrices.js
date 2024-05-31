function magicMatrices (matrix){

    let cols = matrix[0].length;
    let rows = matrix.length;
    let resultToCheck = 0;
    let counter = 0;
    let isEqual = true;

    for(let i = 0; i < rows; i++) {
        counter++;
        let curResult = 0;
        for(let j = 0; j < cols; j++) {
            curResult += matrix[i][j];
        }
        if(counter === 1) {
            resultToCheck = curResult;
        } else if(resultToCheck !== curResult) {
            console.log(!isEqual);
            return;
        }
    }

    for(let i = 0; i < cols; i++) {
        let curResult = 0;
        for(let j = 0; j < rows; j++) {
            curResult += matrix[j][i];
        }
        if(resultToCheck !== curResult) {
            console.log(!isEqual);
            return;
        }
    }

    console.log(isEqual);
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);