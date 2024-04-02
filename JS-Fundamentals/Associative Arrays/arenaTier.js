function arenaTier (arr){

        let gladiators = {};
    
        class Gladiator {
            constructor(name) {
                this.name = name;
                this.skillsList = {};
                this.totalSkill = 0;
            }
    
            addSkill(skill, number) {
                if (!this.skillsList.hasOwnProperty(skill)) {
                    this.skillsList[skill] = number;
                    this.totalSkill += number;
                } else if (this.skillsList[skill] < number) {
                    let update = number - this.skillsList[skill];
                    this.totalSkill += update;
                    this.skillsList[skill] = number;
                }
            }
        }
    
        for (let line of arr) {
            if (line === "Ave Cesar") break;
    
            if (line.includes(" vs ")) {
                let [firstGlad, secondGlad] = line.split(" vs ");
                if (
                    gladiators.hasOwnProperty(firstGlad) &&
                    gladiators.hasOwnProperty(secondGlad)
                ) {
                    let commonTechniques = Object.keys(
                        gladiators[firstGlad].skillsList
                    ).filter((skill) =>
                        gladiators[secondGlad].skillsList.hasOwnProperty(skill)
                    );
                    if (commonTechniques.length > 0) {
                        if (
                            gladiators[firstGlad].totalSkill >
                            gladiators[secondGlad].totalSkill
                        ) {
                            delete gladiators[secondGlad];
                        } else if (
                            gladiators[firstGlad].totalSkill <
                            gladiators[secondGlad].totalSkill
                        ) {
                            delete gladiators[firstGlad];
                        }
                    }
                }
            } else {
                let [name, skill, strNumber] = line.split(" -> ");
                let number = Number(strNumber);
                if (!gladiators.hasOwnProperty(name)) {
                    gladiators[name] = new Gladiator(name);
                }
                gladiators[name].addSkill(skill, number);
            }
        }
    
        let sortedByTotalSkill = Object.entries(gladiators).sort((a, b) => {
            return b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]);
        });
        
    
        for (let [name, gladiator] of sortedByTotalSkill) {
            console.log(`${name}: ${gladiator.totalSkill} skill`);
            let sortedSkills = Object.entries(gladiator.skillsList).sort((a, b) => {
                return b[1] - a[1] || a[0].localeCompare(b[0]);
            });
            sortedSkills.forEach(([skill, number]) =>
                console.log(`- ${skill} <!> ${number}`)
            );
        }
    }


arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);