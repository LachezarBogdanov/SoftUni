function schoolGrades (arr){

    let students = {};

    for (let curSt of arr) {
        curSt = curSt.split(' ');
        let name = curSt.shift();
        let grade = curSt.join(' ');

        if(!students.hasOwnProperty(name)) {
            students[name] = grade;
        } else {
            students[name] += ` ${grade}`;
        }
    }
    
    let sortedNames = Object.entries(students).sort((a,b) => a[0].localeCompare(b[0]));
    
    
    for (let student of sortedNames) {
        let avg = 0;
        let counter = 0;

        for (let el of student[1].split(' ')) {
            avg += Number(el);
            counter++;
        }

        avg /= counter;

        console.log(`${student[0]}: ${avg.toFixed(2)}`);

    }
    
    

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);