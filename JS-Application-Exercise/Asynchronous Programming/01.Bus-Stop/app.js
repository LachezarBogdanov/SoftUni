async function getInfo() {

    const urlForData = 'http://localhost:3030/jsonstore/bus/businfo/';
    const idForStop = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const ulForBusses = document.getElementById('buses');


        try {
            clear();
            const idStop = idForStop.value;
            const allUrl = `${urlForData}${idStop}`;

            const response = await fetch(allUrl);
            const data = await response.json();

            const busName = data.name;
            stopName.textContent = busName;
        

            Object.entries(data.buses).forEach(el => {
                const [busId, busTime] = el;
              const liItem = document.createElement('li');
              liItem.textContent = `Bus ${busId} arrives in ${busTime} minutes`
             ulForBusses.appendChild(liItem);
            })

        } catch (error) {
            stopName.textContent = 'Error';
        }
        

        function clear() {
            stopName.textContent = '';
            ulForBusses.innerHTML = '';
        }
    }
