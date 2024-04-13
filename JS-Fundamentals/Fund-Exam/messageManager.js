function messageManager (arr){

    let maxMessages = Number(arr.shift());
    let messages = {};

    let command = arr.shift();

    while(command !== 'Statistics') {
        let tokens = command.split('=');
        let action = tokens.shift();

        if(action === 'Add') {
            let [username, sent, received] = tokens;
            sent = Number(sent);
            received = Number(received);

            if(!messages.hasOwnProperty(username)) {
                messages[username] = { sent, received };
            }

        } else if(action === 'Message') {
            let [sender, receiver] = tokens;

            if(sender in messages && receiver in messages) {
                messages[sender].sent += 1;
                messages[receiver].received += 1;

                if(messages[sender].sent + messages[sender].received >= maxMessages) {
                    console.log(`${sender} reached the capacity!`);
                    delete messages[sender];
                } 
                if(messages[receiver].sent + messages[receiver].received >= maxMessages) {
                    console.log(`${receiver} reached the capacity!`);
                    delete messages[receiver];
                }
            }
        } else if(action === 'Empty') {
            let username = tokens.shift();

            if(username in messages) {
                delete messages[username];
            } else if(username === 'All') {
               messages = {};
            }
        }

        command = arr.shift();
    }
    
    let users = [];
    let usersCount = 0;
    let entries = Object.entries(messages);

    for (let [user, info] of entries) {
        usersCount++;
        let pushMes = `${user} - ${info.sent + info.received}`
        users.push(pushMes);
    }

    console.log(`Users count: ${usersCount}`);
    users.forEach(u => console.log(u));

}
messageManager(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]);