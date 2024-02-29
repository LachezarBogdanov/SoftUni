function towns(arr){

    

    for (let curRow of arr) {
        let [townName, townLatitude, townLongitude] = curRow.split(' | ');
        let formatedLatitude = Number(townLatitude).toFixed(2);
        let formatedLongitude = Number(townLongitude).toFixed(2);
        let town = {town: townName, latitude: formatedLatitude, longitude: formatedLongitude};
        console.log(town);
    }
    

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);