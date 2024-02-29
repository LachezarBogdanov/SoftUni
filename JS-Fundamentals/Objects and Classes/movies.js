function movies(arr){

    let movies = [];

    for (let command of arr) {
        if(command.includes("addMovie")) {
            let curCom = command.split("addMovie ");
            let movieName = curCom[1];
            let curMov = { name: movieName};
            movies.push(curMov);
        } else if(command.includes("directedBy")) {
            let curCom = command.split(" directedBy ");
            let movieName = curCom[0];
            let directorName = curCom[1];
            let movieFound = movies.find(m => m.name === movieName);

            if(movieFound) {
                movieFound.director = directorName;
            }
        } else if(command.includes("onDate")) {
            let curCom = command.split(" onDate ");
            let movieName = curCom[0];
            let movieDate = curCom[1];
            let movieFound = movies.find(m => m.name === movieName);

            if(movieFound) {
                movieFound.date = movieDate;
            }
        }
    }

    let filtered = movies.filter(m => m.name && m.date && m.director);
    
    for (let cur of filtered) {
        console.log(JSON.stringify(cur));
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);