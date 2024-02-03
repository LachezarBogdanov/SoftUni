function vacationBooksList (input){

    let numberOfPages = Number (input [0]);
    let pagesPerHour = Number (input [1]);
    let daysToRead = Number (input[2]);
    
    let timeToRead = numberOfPages / pagesPerHour
    let HoursPerDay = timeToRead / daysToRead
    console.log(HoursPerDay);
}
vacationBooksList(["212 ",
"20 ",
"2 "]);