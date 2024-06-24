function listProcessor(items) {
    let collection = [];

     function proccesor (items) {
        for (let el of items) {
            let [com, value] = el.split(' ');

            if(com === 'add') {
                collection.push(value);
            } else if(com === 'remove'){
                collection = collection.filter(el => el !== value);
            } else {
                console.log(collection.join(','));
            }
            
        }
        }
        proccesor(items);
    }


const commands = ['add pesho', 'add george', 'add peter', 'remove peter','print'];

const processor = listProcessor(commands);
// commands.forEach(command => processor.execute(command));