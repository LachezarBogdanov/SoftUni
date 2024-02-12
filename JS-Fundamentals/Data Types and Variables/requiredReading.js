function requiredReading(numberPages, pagesPerHour, daysToRead){

    let totalTime = numberPages / pagesPerHour;
    let required = totalTime / daysToRead;

    console.log(required);
} 
requiredReading(212,
    20 ,
    2 );