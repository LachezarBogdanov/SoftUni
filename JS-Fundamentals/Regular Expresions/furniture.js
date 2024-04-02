function furniture(arr){

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+\.?\d+)!(?<qty>[0-9]+)/;
    console.log('Bought furniture:');
    let total = 0;
    
    
    
    for (let line of arr) {
        if (line === 'Purchase') {
            break;
        }

        if(pattern.test(line)) {
            let matches = pattern.exec(line);
            total += Number(matches.groups.price) * Number(matches.groups.qty);
            console.log(matches.groups.name);
        }
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);


}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);