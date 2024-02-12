function login(input){

    let usarname = input.shift();
    let pass = '';
    
    for(let i = usarname.length - 1; i >= 0; i--) {
        pass += usarname[i];
    }

    let wrongGuesses = 0;
    let anotherGuess = input.shift();

    while(anotherGuess !== pass) {
        wrongGuesses++;
        if (wrongGuesses === 4) {
            console.log(`User ${usarname} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        anotherGuess = input.shift();
    }

    console.log(`User ${usarname} logged in.`);
}
login(['Acer','login','go','let me in','recA']);