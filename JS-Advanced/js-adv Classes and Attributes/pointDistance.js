class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        }
        
        static distance(p1, p2) {
           const distanceA = Math.abs(p1.x - p2.x);
           const distanceB = Math.abs(p1.y - p2.y);
           const result = Math.sqrt(distanceA ** 2 + distanceB ** 2);

           return result;
        }
    
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));