function cityTaxes (city, population, treasury){

    let cityReport = {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { 
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percentage) { 
            this.population += Math.floor(this.population * (percentage / 100)) 
        },
        applyRecession(percentage) { 
            this.treasury -= Math.floor(this.treasury * (percentage / 100)) 
        },
    }

    return cityReport
}
const city = result('Sofia', 2000000, 1000000);

//testing if all the properties are correct
expect(city.name).to.be.equal('Sofia', 'The name of the city is incorrect');
expect(city.population).to.be.equal(2000000, 'The city.population is incorrect');
expect(city.treasury).to.be.equal(1000000, 'The city.treasury is incorrect');
expect(city.taxRate).to.be.equal(10, 'The city.taxRate is incorrect');