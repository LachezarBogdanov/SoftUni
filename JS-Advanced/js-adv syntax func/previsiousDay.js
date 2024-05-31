function previsiousDay (year, month, day){

    let curDate = new Date(year, month - 1, day);
    curDate.setDate(curDate.getDate() - 1);

    console.log(`${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`);

}
previsiousDay(2015, 5, 10);