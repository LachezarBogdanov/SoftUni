function race (arr){

    let names = {};
    let extractNames = arr.shift().split(', ');

    for (let name of extractNames) {
        names[name] = 0;
    }

    let patternName = /[A-Za-z]+/g;
    let patternNums = /[0-9]/g;

    for (let line of arr) {

        if(line === 'end of race') {
            break;
        }

        let distance = 0;
        let name = line.match(patternName).join('');
        let nums = line.match(patternNums);

        for (let curNum of nums) {
            distance += Number(curNum);
        }

        if(names.hasOwnProperty(name)) {
            names[name] += distance;
        }
    }

    let sort = Object.entries(names).sort((a,b) => b[1] - a[1]);
    
    console.log(`1st place: ${sort[0][0]}`);
    console.log(`2nd place: ${sort[1][0]}`);
    console.log(`3rd place: ${sort[2][0]}`);
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);