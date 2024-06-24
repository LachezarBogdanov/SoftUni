function tickets (arr, sortCriteria){

    let tickets = [];
    class CreateTicket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static arrSort(arr, sortCriteria){
            if(sortCriteria === 'price') {
                return arr.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
            } else {
                return arr.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
            }
        }
    }

    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        let ticket = new CreateTicket(destination, price, status);
        tickets.push(ticket);
    }

    let sortedArr = CreateTicket.arrSort(tickets, sortCriteria);
    return sortedArr
}
  console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
       'destination'));