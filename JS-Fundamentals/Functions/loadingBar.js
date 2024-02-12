function loadingBar (num) {

    let percents = perCentsCount(num);
    let loadingBar = '[';

    for(let i = 0; i < 10; i++) {
        if(i < percents) {
            loadingBar += '%';
        } else {
            loadingBar += '.';
        }
    }
    loadingBar += ']';

    if(num < 100) {
        console.log(`${num}% ${loadingBar}`);
        console.log('Still loading...');
    } else {
        console.log(`${num}% Complete!`);
        console.log(loadingBar);
    }
    
    function perCentsCount (num) {
     return num / 10;   
    }
}
loadingBar(50);