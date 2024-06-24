function attachGradientEvents() {
    let resultArea = document.getElementById('result');
    let gradient = document.getElementById('gradient-box');

    gradient.addEventListener('mousemove', (event) => {
        let x = event.offsetX;
        let elWidth = event.currentTarget.offsetWidth;
        let currPosition = Math.floor((x / elWidth) * 100);
        resultArea.textContent = `${currPosition}%`
    })

    gradient.addEventListener('mouseout', (event) => {
        resultArea.textContent = '';
    })
}