class List {
    constructor() {
        this.elements = [];
        this.size = this.elements.length;
    }

    add(element) {
        this.elements.push(element);
        this.elements.sort((a, b) => a - b);

        this.size = this.elements.length;
    }

    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements.splice(index, 1);

            this.size = this.elements.length;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    get(index) {
        if (index >= 0 && index < this.elements.length) {
            return this.elements[index];
        } else {
            throw new Error("Index out of bounds");
        }
    }

    
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));