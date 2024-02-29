function makeADictionary (arr){

 
        let result = [];
        for (let curRow of arr) {
            let name = curRow.split(`"`)[1];
            let info = curRow.split(`"`)[3];
            if(result.includes(result.name)) {
                let curObj = { name: name, info: info };
                result.push(curObj);
                break;
            }
            let curObj = { name: name, info: info };
            result.push(curObj);
        }
        let newResult = result.sort((a, b) => a.name.localeCompare(b.name));
        for (let row of newResult) {
            console.log(`Term: ${row.name} => Definition: ${row.info}`);
        }
        
    
}
makeADictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]);