function argumentInfo (...arg){

    let totalCount = {};
    for (let curArg of arg) {
        let type = typeof curArg;

        console.log(`${type}: ${curArg}`);
        if(!totalCount.hasOwnProperty(type)) {
            totalCount[type] = 0;
        }
        totalCount[type] += 1;
    }
    Object.entries(totalCount).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`${k} = ${v}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })