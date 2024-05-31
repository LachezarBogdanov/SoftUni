function listOfNames (data){

    data.sort((a, b) => a.localeCompare(b))
    .forEach((el, i) => console.log(`${i + 1}.${el}`))
    
    
    // for(let i = 0; i < data.length; i++) {
    //     console.log(`${i + 1}.${data[i]}`);
    // }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);