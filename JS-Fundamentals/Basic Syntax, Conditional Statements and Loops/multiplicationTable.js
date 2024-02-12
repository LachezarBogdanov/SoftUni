function multiplicationTable(parameter){

    let result = 0;
    for(let i = 1; i <= 10; i++) {
        result = parameter * i;
        console.log(`${parameter} X ${i} = ${result}`);
    }
}
multiplicationTable(5);