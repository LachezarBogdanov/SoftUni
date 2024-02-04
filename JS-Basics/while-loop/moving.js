function moving(input) {

    let lengthFree = Number(input[0]);
    let widthFree = Number(input[1]);
    let highFree = Number(input[2]);
    let freeSpace = lengthFree * widthFree * highFree;
    
    let index = 3;
    let command = input[index];
    index++;

        while(command !== 'Done') {
            let broi = Number(command);
            freeSpace -= broi;

            if(freeSpace <= 0) {
                break;
            }

            command = input[index];
            index++;
        }

    if(command === 'Done') {
        console.log(`${freeSpace} Cubic meters left.`);
        return;
    }
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);