function printAndSum(start, end){

    let sum = 0;
    let curStr = '';

    for(let num = start; num <= end; num++) {
        sum += num;
        curStr += num + ' ';
    }
    console.log(curStr);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);