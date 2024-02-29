function convertToObject (str){

    let person = JSON.parse(str);
    
    for (let key in person) {
       console.log(`${key}: ${person[key]}`);
    }

}
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');