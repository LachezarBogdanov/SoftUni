function cinemaTickets (input){

    let index = 0;
    let command = input[index];
    index++;
    let studentT = 0;
    let standardT = 0;
    let kidT = 0;
   
    
    
   while (command !== 'Finish'){
    let movieName = command;
    let freePlaces = Number(input[index]);
    index++;

    let command1 = input[index];
    index++;
    let placesTasken = 0;

    while (command1 !== 'End'){
        let ticketType = command1;

        if(ticketType === 'student'){
            studentT++;
        }else if(ticketType === 'standard'){
            standardT++;
        }else {
            kidT++;
        }
        placesTasken++;
        if(placesTasken === freePlaces){
            break;
        }
        command1 = input[index];
        index++;
    }
    
    let percentTaken = (placesTasken / freePlaces) * 100;
    console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

    command = input[index];
    index++;
   }

   let totalTickets = studentT + standardT + kidT;
   console.log(`Total tickets: ${totalTickets}`);

   let percentStudent = (studentT / totalTickets) * 100;
   let pecentStandard = (standardT / totalTickets) * 100;
   let percentKid = (kidT / totalTickets) * 100;
   console.log(`${percentStudent.toFixed(2)}% student tickets.`);
   console.log(`${pecentStandard.toFixed(2)}% standard tickets.`);
   console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);