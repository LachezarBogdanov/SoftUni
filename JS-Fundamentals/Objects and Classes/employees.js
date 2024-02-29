function employees (arr){

 

    for (let curName of arr) {
        let nameLength = curName.length;
        let curObj = { name: curName, number: nameLength};
        
        console.log(`Name: ${curObj.name} -- Personal Number: ${curObj.number}`);
    }
    
    

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);