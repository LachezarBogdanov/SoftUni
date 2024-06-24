function filterEmployees (data, criteria){

    let parsedJson = JSON.parse(data);
    let [criteriaKey, criteriaValue] = criteria.split('-');
    let filteredLines = [];
    let resultObj = {};

    for (let parsedJsonCurLine of parsedJson) {
        if(parsedJsonCurLine[criteriaKey] === criteriaValue) {
            filteredLines.push(parsedJsonCurLine);
        }
    }

    for (let curLine of filteredLines) {
        const allname = curLine.first_name + ' ' + curLine.last_name;
        const email = curLine.email;
        resultObj[allname] = email;
    }
    
    let entries = Object.entries(resultObj);
    
    for(let i = 0; i < entries.length; i++) {
        const [name, email] = entries[i];
        console.log(`${i}. ${name} - ${email}`);
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
);