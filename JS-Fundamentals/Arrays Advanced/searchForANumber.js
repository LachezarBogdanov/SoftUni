function searchForANumber (arr1, arr2) {

    let firstManipulation = arr1.slice(0, arr2[0]);

    firstManipulation.splice(0, arr2[1]);
    let lastNum = arr2[2];
    let counter = 0;
    
    for (let num of firstManipulation) {
        if(lastNum === num) {
            counter++;
        }
    }
    console.log(`Number ${lastNum} occurs ${counter} times.`);


}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);