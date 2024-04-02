function meetings (arr){

    let obj = {};

    for (let curDay of arr) {
        let [dayOfWeek, name] = curDay.split(' ');

        if(!obj.hasOwnProperty(dayOfWeek)) {
            obj[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }

    let entries = Object.entries(obj);
    for (let day in entries) {
        let digits = entries[day];
        console.log(`${digits[0]} -> ${digits[1]}`);
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);