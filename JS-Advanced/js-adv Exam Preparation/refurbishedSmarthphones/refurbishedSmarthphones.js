class RefurbishedSmartphones {
    constructor(retailer, revenue = 0) {
        this.retailer = retailer;
        this.revenue = revenue;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
    }

    addSmartphone(model, storage, price, condition) {
        if(!model) {
            throw new Error("Invalid smartphone!");
        }
        if(!Number.isInteger(storage) || storage <= 0) {
            throw new Error("Invalid smartphone!");
        }
        if(price < 0) {
            throw new Error("Invalid smartphone!");
        }
        if(!condition) {
            throw new Error("Invalid smartphone!");
        }

        this.availableSmartphones.push({model, storage, price, condition});
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone (model, desiredStorage){
        let foundSmart = this.availableSmartphones.find(phone => phone.model === model);

        if(!foundSmart) {
            throw new Error(`${model} was not found!`);
        }

        let diference = desiredStorage - foundSmart.storage;
        if(diference > 0 && diference <= 128) {
            foundSmart.price *= 0.9;
        }

        if(diference > 0 && diference > 128) {
            foundSmart.price *= 0.8;
        }

        this.soldSmartphones.push(foundSmart);
        this.availableSmartphones = this.availableSmartphones.filter(phone => phone.model !== model);
        this.revenue += foundSmart.price;
        return `${foundSmart.model} was sold for ${foundSmart.price.toFixed(2)}$`
    }

    upgradePhones() {
        let upgradedSmartphones = ['Upgraded Smartphones:'];

        if(this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(el => el.storage *= 2);
        this.availableSmartphones.forEach(el => upgradedSmartphones.push(`${el.model} / ${el.storage} GB / ${el.condition} condition / ${el.price.toFixed(2)}$`));
                    
        return upgradedSmartphones.join('\n');
    }

    salesJournal(criteria) {
        let criterias = ['storage', 'model'];

        if(!criterias.includes(criteria)) {
            throw new Error("Invalid criteria!");
        }

        if(criteria === 'storage') {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if(criteria === 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }

        let soldSmartphonesMessage = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldSmartphones.length} smartphones sold:`
        ];

        this.soldSmartphones.forEach(el => soldSmartphonesMessage.push(`${el.model} / ${el.storage} GB / ${el.price.toFixed(2)}$`));

        return soldSmartphonesMessage.join('\n')
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));




