class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let names = [];
        for (let candidate of candidates) {
            let [name, education, yearsExp] = candidate.split('-');
            yearsExp = Number(yearsExp);
            let candidateFind = this.jobCandidates.find(el => el.name === name);

            if(candidateFind) {
                if(candidateFind.yearsExperience < yearsExp) {
                    candidateFind.yearsExperience = yearsExp;
                }
            } else {
                this.jobCandidates.push({name, education, yearsExperience: yearsExp});
                names.push(name);
            }
        }

        let str = `You successfully added candidates: ${names.join(', ')}.`;
        return str;
    }

    jobOffer(chosenPerson) {
        let [name, years] = chosenPerson.split('-');
        years = Number(years);
        let findPerson = this.jobCandidates.find(el => el.name === name);

        if(!findPerson) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if(findPerson.yearsExperience < years) {
            throw new Error(`${name} does not have enough experience as ${findPerson.education}, minimum requirement is ${years} years.`)
        }

        findPerson.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name) {
        let findPerson = this.jobCandidates.find(el => el.name === name);

        if(!findPerson) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if(findPerson.education === 'Bachelor') {
            return `${findPerson.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if(findPerson.education === 'Master') {
            return `${findPerson.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${findPerson.name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if(this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        let allCandidates = ["Candidates list:"];

        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        for (let candidate of this.jobCandidates) {
            allCandidates.push(`${candidate.name}-${candidate.yearsExperience}`);
        }

        return allCandidates.join('\n');
        }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());




