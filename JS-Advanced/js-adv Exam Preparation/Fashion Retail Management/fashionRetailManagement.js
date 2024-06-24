class FashionRetailInventory {
    constructor(storeHouse, location) {
        this.storeHouse = storeHouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct (productName, size, quantity, price) {
        quantity = Number(quantity);
        price = Number(price);

        let findProduct = this.productStock.find(el => el.productName === productName && el.size === size);

        if(findProduct) {
            findProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${findProduct.productName} size ${size}`
        } else {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }

    sendProduct(productName, size) {
        let findProduct = this.productStock.find(el => el.productName === productName && el.size === size);

        if(!findProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        }

        let idxOfProduct = this.productStock.indexOf(findProduct);
        this.productStock.splice(idxOfProduct, 1);

        return `The product ${productName}, size ${size} was successfully removed from the inventory`
    }

    findProductsBySize(size) {
        let productWithThisSize = [];

        for (let product of this.productStock) {
            if(product.size === size) {
                productWithThisSize.push(product);
            }
        }

        if(productWithThisSize.length > 0) {
            let message = [];

            for (let curPr of productWithThisSize) {
                message.push(`${curPr.productName}-${curPr.quantity} pieces`);
            }

            return message.join(', ');
        } else {
            return `There are no products available in that size`;
        }
    }

    listProducts() {
        if(this.productStock.length === 0) {
            return `${this.storeHouse} storehouse is empty`
        } else {
            let message = [`${this.storeHouse} storehouse in ${this.location} available products:`]

            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));

            for (let pr of this.productStock) {
                message.push(`${pr.productName}/Size:${pr.size}/Quantity:${pr.quantity}/Price:${pr.price}$`)
            }

            return message.join('\n')
        }
    }
}

  const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());


