function attachEventsListeners() {

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hourBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', (event) => {
        let daysCount = Number(daysInput.value);

        hoursInput.value = daysCount * 24;
        minutesInput.value = daysCount * 1440;
        secondsInput.value = daysCount * 86400;
    });

    hourBtn.addEventListener('click', () => {
        let hoursCount = Number(hoursInput.value);

        daysInput.value = hoursCount / 24;
        minutesInput.value = hoursCount * 60;
        secondsInput.value = hoursCount * 3600;
    });

    minutesBtn.addEventListener('click', () => {
        let minutesCount = Number(minutesInput.value);

        daysInput.value = minutesCount / 1440;
        hoursInput.value = minutesCount / 60;
        secondsInput.value = minutesCount * 60;
    });

    secBtn.addEventListener('click', () => {
        let secCount = Number(secondsInput.value);

        daysInput.value = secCount / 86400;
        hoursInput.value = secCount / 60 / 60;
        minutesInput.value = secCount / 60;
    })
}