function travelTime (arr){

    let travelCoutryes = {};

    for (let curTravel of arr) {
        let [ctrName, townName, cost] = curTravel.split(' > ');

        if(ctrName in travelCoutryes) {
            travelCoutryes[ctrName].push([townName, cost]);
        } else {
            travelCoutryes[ctrName] = [[townName, cost]];
        }
    
    }
    let sortedAlph = Object.entries(travelCoutryes).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [country, cityes] of sortedAlph) {
        let reducedCityList = {};
        for (let [cityName, cityPrice] of cityes) {
            if(cityName.hasOwnProperty(reducedCityList) && reducedCityList[cityName] > cityPrice) {
                reducedCityList[cityName] = cityPrice;
            } else {
                reducedCityList[cityName] = cityPrice;
            }
        }
        let finalStr = `${country} ->`;
        let sortedCities = Object.entries(reducedCityList).sort((a, b) => a[1] - b[1]);
        for(let [city, price] of sortedCities) {
            finalStr += ` ${city} -> ${price}`;
        }
        console.log(finalStr);
    }

    
}
travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"
]);

// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
//     ]);