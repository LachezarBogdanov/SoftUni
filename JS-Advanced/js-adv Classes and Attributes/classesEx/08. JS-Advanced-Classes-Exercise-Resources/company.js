class Company {
    constructor (){
        this.departments = {};
        this.avgSalaries = {};
    }

    addEmployee(name, salary, position, department){
        if(name === '' || name === undefined || name === null) {
            throw new Error(('Invalid input!'));
        }
        if(salary < 0) {
            throw new Error(('Invalid input!'));
        }
        if(position === '' || position === undefined || position === null) {
            throw new Error(('Invalid input!'));
        }
        if(department === '' || department === undefined || department === null) {
            throw new Error(('Invalid input!'));
        }

        
        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        } 
            this.departments[department].push([name, salary, position]);
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        
    }

    bestDepartment(){
       let keys = Object.keys(this.departments);
       for (let curKey of keys) {
           let salary = 0;
        let curValues = this.departments[curKey];
            for (let value of curValues) {
                salary += value[1];
            }
            let avrSal = (salary / curValues.length).toFixed(2);
            this.avgSalaries[curKey] = avrSal;
            
       }

       let keysOfAvr = Object.keys(this.avgSalaries);
       let bestSalary = 0;
       let bestSalaryKey = '';
       for(let key of keysOfAvr) {
        if(this.avgSalaries[key] > bestSalary) {
            bestSalary = this.avgSalaries[key];
            bestSalaryKey = key;
        }
       }  

       let entriesOfBest = Object.entries(this.departments[bestSalaryKey]);
       entriesOfBest.sort((a, b) => b[1][1] - a[1][1] || a[1][0].localeCompare(b[1][0]));
       
       let buff = '';
       entriesOfBest.forEach(el => buff += `${el[1][0]} ${el[1][1]} ${el[1][2]}\n`);
       buff = buff.trim();
       return `Best Department is: ${bestSalaryKey}\nAverage salary: ${bestSalary}\n${buff}`
     }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
