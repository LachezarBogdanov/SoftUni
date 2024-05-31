function roadRadar (curSpeed, area){

    let status = '';
    const motorwayLimit = 130;
    const intersateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20; 

    switch (area) {
        case 'motorway':
            if(curSpeed > motorwayLimit) {
                let speedMore = curSpeed - motorwayLimit;

                if(speedMore <= 20) {
                    status = 'speeding';
                } else if(speedMore <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedMore} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`);
            } else {
                console.log(`Driving ${curSpeed} km/h in a ${motorwayLimit} zone`);
            }
            break;

        case 'interstate':
            if(curSpeed > intersateLimit) {
                let speedMore = curSpeed - intersateLimit;

                if(speedMore <= 20) {
                    status = 'speeding';
                } else if(speedMore <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedMore} km/h faster than the allowed speed of ${intersateLimit} - ${status}`);
            } else {
                console.log(`Driving ${curSpeed} km/h in a ${intersateLimit} zone`);
            }
            break;

        case 'city':
            if(curSpeed > cityLimit) {
                let speedMore = curSpeed - cityLimit;

                if(speedMore <= 20) {
                    status = 'speeding';
                } else if(speedMore <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedMore} km/h faster than the allowed speed of ${cityLimit} - ${status}`);
            } else {
                console.log(`Driving ${curSpeed} km/h in a ${cityLimit} zone`);
            }
            break;

        case 'residential':
            if(curSpeed > residentialLimit) {
                let speedMore = curSpeed - residentialLimit;

                if(speedMore <= 20) {
                    status = 'speeding';
                } else if(speedMore <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${speedMore} km/h faster than the allowed speed of ${residentialLimit} - ${status}`);
            } else {
                console.log(`Driving ${curSpeed} km/h in a ${residentialLimit} zone`);
            }
            break;
    }
}
roadRadar(21, 'residential');