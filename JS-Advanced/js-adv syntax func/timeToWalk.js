function timeToWalk (steps, stepMetres, kmh){

    let allMetres = steps * stepMetres;
    let metresPerSec = kmh / 3.6;
    let time = allMetres / metresPerSec;
    let pauses = Math.floor(allMetres / 500);
    time += pauses * 60;
    
    let miliSec = Math.round(time % 60);
    let seconds = Math.floor(time / 60);
    let hours = Math.floor(time / 60 / 60);
    
    let miliSecToPr = miliSec < 10 ? `0${miliSec}` : miliSec;
    let secondToPr = seconds < 10 ? `0${seconds}` : seconds;
    let hoursToPr = hours < 10 ? `0${hours}` : hours;

    console.log(`${hoursToPr}:${secondToPr}:${miliSecToPr}`);

}
timeToWalk(4000, 0.60, 5);