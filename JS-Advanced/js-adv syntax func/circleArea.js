function circleArea(arg){

    let type = typeof arg;

    if(type === 'number') {
        let area = Math.PI * arg * arg;
        console.log(area.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}
circleArea(5);