function add (num){
    let sum = 0;
    sum += num
    function add(num) {
        sum += num;
        return add;
    }
    add.toString = () => sum;
    return add
}
console.log(add(1)(6)(-3).toString());