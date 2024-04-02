function companyUsers (arr){

    let companyEmployees = {};

    for (let curEmp of arr) {
        let [companyName, empId] = curEmp.split(' -> ');
        
        if(companyName in companyEmployees) {
            if(!companyEmployees[companyName].includes(empId)) {
                companyEmployees[companyName].push(empId);
            }

        } else {
            companyEmployees[companyName] = [empId];
        }
    }

    let entires = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let curCompany of entires) {
        console.log(curCompany[0]);

        for (let curId of curCompany[1]) {
            console.log(`-- ${curId}`);
        }
    }

    

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);