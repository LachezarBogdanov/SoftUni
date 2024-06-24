function solve (area, vol, input) {

    let objs = JSON.parse(input);
    let result = [];
    
    for (let curLine of objs) {
        result.push({ 
            area: area.call(curLine),
            volume: vol.call(curLine),
        })
    }

    return result;
}

function vol() {
        return Math.abs(this.x * this.y * this.z);
    };

function area() {
                return Math.abs(this.x * this.y);
        };

const r = solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);
        
console.log(r);