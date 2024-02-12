function triangleOfNumbers(row){

    let rowsToHave = row;

    for(let curRow = 1; curRow <= rowsToHave; curRow++) {
        console.log(`${curRow} `.repeat(curRow));
    }
}
triangleOfNumbers(3);