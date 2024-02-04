function oldBooks (input){

    let serchedBook = input[0];
    let index = 2;
    let command = input[1];
    let booksGo = 0;

    while(command !== 'No More Books'){
        if(command === serchedBook){
            console.log(`You checked ${booksGo} books and found it.`);
            break;
        }
        booksGo++;
        command = input[index];
        index++;

    }
    if(command === 'No More Books'){  
        console.log("The book you search is not here!");
        console.log(`You checked ${booksGo} books.`);
    }
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);