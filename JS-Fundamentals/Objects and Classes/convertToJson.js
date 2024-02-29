function convertToJson (first, last, hair){

    let person = {
        name: first,
        lastName: last,
        hairColor: hair
    }

    console.log(JSON.stringify(person));

}
convertToJson('George', 'Jones', 'Brown');