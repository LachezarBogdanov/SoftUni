function barIncome (arr) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d+)\$/;
    let total = 0;

    for (let line of arr) {

        if(line === 'end of shift') {
            break;
        }

        if(pattern.test(line)) {
            let match = pattern.exec(line);
            let price = match.groups.price * match.groups.count;
            total += price;
            
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
        }

    }

    console.log(`Total income: ${total.toFixed(2)}`);


}
barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);