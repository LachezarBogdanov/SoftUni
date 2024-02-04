function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let pieces = length * width;
    let index = 2;
    let command = input[index];
    index++;

    while(command !== 'STOP') {
        command = Number(command);
        pieces -= command;

        if(pieces <= 0) {
            break;
        }

        command = input[index];
        index++;
    }

    if(command === 'STOP') {
        console.log(`${pieces} pieces are left.`);
        return;
    }

    let needed = Math.abs(pieces);
    console.log(`No more cake left! You need ${needed} pieces more.`);
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);