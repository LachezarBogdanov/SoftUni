function agregateElements (arr){

    let firstSum = 0;
    let secondSum = 0;
    let concat = '';
    for (let num of arr) {
        firstSum += num;
        secondSum += 1 / num;
        concat += num;
    }   

    console.log(firstSum);
    console.log(secondSum);
    console.log(concat);

}
agregateElements([2, 4, 8, 16]);