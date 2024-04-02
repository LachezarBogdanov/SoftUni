function phoneBook (arr){

    let obj = {};
    for (let curRow of arr) {
        let [name, phoneNumber] = curRow.split(' ');

        obj[name] = phoneNumber;
    }
    
    for (let row in obj) {
        console.log(`${row} -> ${obj[row]}`);
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);