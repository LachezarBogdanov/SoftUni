function piccolo (arr){

    
        const parkingLot = {};
        
        arr.forEach(entry => {
            const [direction, carNumber] = entry.split(", ");
            
            if (direction === "IN") {
                parkingLot[carNumber] = true; // Car enters
            } else if (direction === "OUT") {
                delete parkingLot[carNumber]; // Car exits
            }
        });
    
        const parkedCars = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));
    
        if (parkedCars.length === 0) {
            console.log("Parking Lot is Empty");
        } else {
            console.log(parkedCars.join("\n"));
        }
    }
    
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA']);