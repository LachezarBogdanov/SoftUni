function equalNeighbors(input) {
    let countOfEq = 0;
    let rows = input.length;
    let cols = input[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Check right neighbor
            if (j + 1 < cols && input[i][j] === input[i][j + 1]) {
                countOfEq++;
            }
            // Check bottom neighbor
            if (i + 1 < rows && input[i][j] === input[i + 1][j]) {
                countOfEq++;
            }
        }
    }

    return countOfEq;
}

console.log(equalNeighbors([
    ['1', '1'],
    ['1', '1']
]));