function area (input){

    let figura = input[0];
    let razmer = Number(input[1]);
    let visochina = Number(input[2]);
    let lice = 0;
    
        if(figura === 'square'){
            lice = razmer * razmer;
        }else if(figura === 'rectangle'){
            lice = razmer * visochina;
        }else if(figura === 'circle'){
            lice = Math.PI * razmer * razmer;
        }else if(figura === 'triangle'){
            lice = (razmer * visochina) / 2;
        }
        console.log(lice.toFixed(3));
}
area(["square", "5"]);