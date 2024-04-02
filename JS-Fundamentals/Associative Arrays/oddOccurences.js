function oddOccurences (input){

    let arrOfInput = input.split(' ');
    let occurrences = {};

    for (let curWord of arrOfInput) {
        curWord = curWord.toLowerCase();
        if(occurrences.hasOwnProperty(curWord)) {
            occurrences[curWord] += 1;
        } else {
            occurrences[curWord] = 1;
        }
    }

    let entries = Object.entries(occurrences).filter((el) => el[1] % 2 !== 0);
    let sort = entries.sort((a, b) => b[1] - a[1]);
    
    let result = '';
    for (let curDigit of sort) {
        result += curDigit[0] + ' ';
    }
    console.log(result);
    

}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');