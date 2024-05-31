function daysInMonth(month, year){

    let tempDate = new Date(year, month, 0).getDate();
    return tempDate;

}
daysInMonth(2, 2013);