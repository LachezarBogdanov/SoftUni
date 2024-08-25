function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const idFromUser = document.getElementById('location');
    const divForecast = document.getElementById('forecast');
    const divForTodayInfo = document.getElementById('current');
    const divForThreeDaysInfo = document.getElementById('upcoming');

    let icons = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    const urls = {
        allLocations: 'http://localhost:3030/jsonstore/forecaster/locations',
        curentConditons: 'http://localhost:3030/jsonstore/forecaster/today/',
        forThreeDays: 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    }

    submitBtn.addEventListener('click', allLocations)

    async function allLocations() {
        try {
            let response = await fetch(urls.allLocations);
            let data = await response.json();
            
            let curDataFromUserId = data.find(el => el.name === idFromUser.value);
            const codeId = curDataFromUserId.code;
            const curConditionResponse = await fetch(`${urls.curentConditons}${codeId}`);
            const curConditionsForDays = await fetch(`${urls.forThreeDays}${codeId}`);
            getCurWeather(curConditionResponse);
            getWeatherForThreeDays(curConditionsForDays);
            
            clear();
        } catch (error) {
            divForecast.style.display = 'block';
            let divError = document.createElement('div');
            divError.classList.add('forecast');
            divError.textContent = 'Error';
           divForTodayInfo.appendChild(divError);
        }
    }

    async function getCurWeather(data) {

        const dataFromCurentCondition = await data.json();

        divForecast.style.display = 'block';
        
        const divContainer = fillForecastForToday(dataFromCurentCondition);
        divForTodayInfo.appendChild(divContainer);
    }


    async function getWeatherForThreeDays(data) {

        const dataForThreeDays = await data.json();

        const divContainer = getWeatherForThreeDaysFill(dataForThreeDays);
        divForThreeDaysInfo.appendChild(divContainer);
    }


    function getWeatherForThreeDaysFill (data) {
        
        let divContainer = document.createElement('div');
        divContainer.classList.add('forecast-info');
        
        data.forecast.forEach(el => {
            let {condition, high, low} = el;
            let degreeIcon = icons['Degrees'];
            let str = `${low}${degreeIcon}/${high}${degreeIcon}`;

            let spanContainer = generateSpan(['upcoming']);
            let spanCond = generateSpan(['symbol'], icons[condition], true);
            let spanTemp = generateSpan(['forecast-data'], str, true);
            let spanWeather = generateSpan(['forecast-data'], condition, false);

            spanContainer.appendChild(spanCond);
            spanContainer.appendChild(spanTemp);
            spanContainer.appendChild(spanWeather);
            divContainer.appendChild(spanContainer);
        })

        return divContainer;
    }

    function fillForecastForToday(data) {
        let degreeIcon = icons['Degrees'];
        let degreesStr = `${data.forecast.low}${degreeIcon}/${data.forecast.high}${degreeIcon}`;

        let divContainer = document.createElement('div');
        divContainer.classList.add('forecast');

        let spanCondition = generateSpan(['condition', 'symbol'], icons[data.forecast.condition], true);
        let spanContainer = generateSpan(['condition']);
        let spanCity = generateSpan(['forecast-data'], data.name, false);
        let spanDegrees = generateSpan(['forecast-data'], degreesStr, true);
        let spanWeather = generateSpan(['forecast-data'], data.forecast.condition, false);

        spanContainer.appendChild(spanCity);
        spanContainer.appendChild(spanDegrees);
        spanContainer.appendChild(spanWeather);
        
        divContainer.appendChild(spanCondition);
        divContainer.appendChild(spanContainer);

        return divContainer;
    }

    function generateSpan (clas, text, symbolBol) {
        let spanEl = document.createElement('span');

        clas.forEach(el => spanEl.classList.add(el))
    

        symbolBol ? spanEl.innerHTML = text : spanEl.textContent = text;

        return spanEl;
    }

    function clear() {
        Array.from(divForTodayInfo.children).forEach((el, i) => {
            if(i !== 0) {
                el.remove();
            }
        })

        Array.from(divForThreeDaysInfo.children).forEach((el, i) => {
            if(i !== 0) {
                el.remove();
            }
        })
    }
}

attachEvents();