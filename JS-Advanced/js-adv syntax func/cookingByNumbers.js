function cookingByNumbers (number, arg1, arg2, arg3, arg4, arg5){

    number = Number(number);
    let arr = [];
    arr.push(arg1, arg2, arg3, arg4, arg5);
    
    for (let curArg of arr) {
        if(curArg === 'chop') {
            number = number / 2;
            console.log(number);
        } else if(curArg === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if(curArg === 'spice') {
            number += 1;
            console.log(number);
        } else if(curArg === 'bake') {
            number *= 3;
            console.log(number);
        } else if(curArg === 'fillet') {
            number -= number * 0.2;
            console.log(number);
        }
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');