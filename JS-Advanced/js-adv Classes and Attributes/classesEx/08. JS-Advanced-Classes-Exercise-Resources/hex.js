class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return '0x' + (this.value).toString(16).toUpperCase();
    }

    plus(numberOrHex) {
        let valueToAdd;

        if (numberOrHex instanceof Hex) {
            valueToAdd = numberOrHex.valueOf();
        } else if (typeof numberOrHex === 'number') {
            valueToAdd = numberOrHex;
        }
        return new Hex(this.value + valueToAdd);
    }

    minus(numberOrHex){
        let valueToSubtract;

        if(numberOrHex instanceof Hex) {
            valueToSubtract = numberOrHex.valueOf();
        } else if(typeof numberOrHex === 'number') {
            valueToSubtract = numberOrHex;
        }
        return new Hex(this.value - valueToSubtract);
    }

    parse(string){
        let parseNum = parseInt(string, 16);
        return parseNum
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));