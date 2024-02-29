function buildAWall (arr) {

    let allConcrete = 0;
    let allPerDayConc = [];

    while(arr.some(n => n < 30)) {
        let dayli = 0;
        for (let index in arr) {
            if(arr[index] < 30){
                arr[index]++;

                dayli += 195;
            }
        }
        allPerDayConc.push(dayli);
    }
    
    for (let num of allPerDayConc) {
        allConcrete += num;
    }
    let allAmount = allConcrete * 1900;
    console.log(allPerDayConc.join(', '));
    console.log(`${allAmount} pesos`);

}
buildAWall([17, 22, 17, 19, 17]);