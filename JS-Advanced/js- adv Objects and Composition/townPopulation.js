function townPopulation (arr){

    let registry = {};

    for (let curCity of arr) {
        let [city, population] = curCity.split(' <-> ');

        if(!registry.hasOwnProperty(city)) {
            registry[city] = Number(population);
        } else {
            registry[city] += Number(population);
        }
    }  
    
    for (const city in registry) {
        console.log(`${city} : ${registry[city]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);