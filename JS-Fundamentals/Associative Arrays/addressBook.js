function addressBook (arr){

    let namesAndAdreses = {};

    for (let curPerson of arr) {
        let [name, adress] = curPerson.split(':');

        namesAndAdreses[name] = adress;
    }
    
    let sortedEntries = Object.entries(namesAndAdreses).sort((a,b) => a[0].localeCompare(b[0]));
    
    sortedEntries.forEach(el => console.log(`${el[0]} -> ${el[1]}`));


}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);