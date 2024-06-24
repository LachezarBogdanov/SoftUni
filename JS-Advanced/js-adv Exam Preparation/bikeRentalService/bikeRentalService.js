class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
        this.addedBikes = [];
    }

    addBikes(bikes) {
        for (let bike of bikes) {
            let [name, qty, price] = bike.split('-');
            qty = Number(qty);
            price = Number(price);
            let findBike = this.availableBikes.find(el => el.brand === name);

            if(findBike) {
                findBike.quantity += qty;

                if(findBike.price < price) {
                    findBike.price = price;
                }
            } else {
                this.availableBikes.push({ brand: name, quantity: qty, price });
                this.addedBikes.push(name);
            }
        }

        return `Successfully added ${this.addedBikes.join(', ')}`;
    }

    rentBikes(selectedBikes) {
        let totalPrice = 0;
        for (let rentBike of selectedBikes) {
            let [brand, qty] = rentBike.split('-');
            qty = Number(qty);

            let findBikeForRent = this.availableBikes.find(el => el.brand === brand);

            if(findBikeForRent) {
                if(findBikeForRent.quantity >= qty) {
                    let price = qty * findBikeForRent.price;
                    findBikeForRent.quantity -= qty;
                    totalPrice += price;
                }
            } else {
                return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
            }
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    returnBikes(returnedBikes) {
        for (let returnedBike of returnedBikes) {
            let [brand, qty] = returnedBike.split('-');
            qty = Number(qty);

            let checkForReturnedBike = this.availableBikes.find(el => el.brand === brand);

            if(checkForReturnedBike) {
                checkForReturnedBike.quantity += qty;
            } else {
                return "Some of the returned bikes are not from our selection.";
            }
        }

        return "Thank you for returning!"
    }

    revision() {
        let message = ["Available bikes:"];

        this.availableBikes.sort((a, b) => a.price - b.price);

        for (let bike of this.availableBikes) {
            message.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`)
        }

        message.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}.`);

        return message.join('\n')
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());

