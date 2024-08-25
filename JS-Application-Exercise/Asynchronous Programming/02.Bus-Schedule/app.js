function solve() {
    let currentStop = 'depot';
    const infoBox = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const ariveBtn = document.getElementById('arrive');
    
    async function depart() {
        let urlForStop = `http://localhost:3030/jsonstore/bus/schedule/${currentStop}`;

        try {
            const response = await fetch(urlForStop);
            const data = await response.json();
            
            let stopName = data.name;
            
            infoBox.textContent = `Next stop ${stopName}`;
            ariveBtn.disabled = false;
            departBtn.disabled = true;

        } catch (error) {
            infoBox.textContent = 'Error';
            departBtn.disabled = 'true';
            ariveBtn.disabled = 'true';
        }
    }

    async function arrive() {
        let urlForStop = `http://localhost:3030/jsonstore/bus/schedule/${currentStop}`;

        try {

            const response = await fetch(urlForStop);
            const data = await response.json();

            infoBox.textContent = `Arriving at ${data.name}`;

            ariveBtn.disabled = true;
            departBtn.disabled = false;
            currentStop = data.next;
        } catch (error) {
            infoBox.textContent = 'Error';
            departBtn.disabled = 'true';
            ariveBtn.disabled = 'true';
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();