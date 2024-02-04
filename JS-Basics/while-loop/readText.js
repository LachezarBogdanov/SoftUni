function readText (input){

    let index = 0;
    let curIndex = input[index];
    
        while(curIndex !== 'Stop'){
            console.log(curIndex);
            index++
            curIndex = input[index];
        }
    
    
    }
    readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);