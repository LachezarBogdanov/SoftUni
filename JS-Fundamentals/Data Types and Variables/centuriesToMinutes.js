function centuriesToMinutes(century){

    let curYears = century * 100;
    let days = Math.trunc(curYears * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${century} centuries = ${curYears} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}  
centuriesToMinutes(1);