function lastKNumbersSequence (length, kElelemnts){

    let newArr = [1];

    for(let i = 0; i < length - 1; i++) {
        let sequence = newArr.slice(-kElelemnts);
        let sum = 0;

        for (let el of sequence) {
            sum += el;
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' '));

}
lastKNumbersSequence(8, 2);