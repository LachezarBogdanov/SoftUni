class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    get diameter (){
        return this.radius * 2;
    }

    set diameter (value){
        this.radius = value / 2;
    }

    get area (){
        return Math.PI * this.radius * this.radius;
    }
}

let c = new result(5);
c.diameter = 1.6;
expect(c.radius).to.equal(0.8, "Object's radius wasn't set correctly.");
expect(c.diameter).to.equal(1.6, "Object's diameter wasn't set correctly.");
expect(c.area.toFixed(2)).to.equal('2.01', "Object's area wasn't calculated correctly.");