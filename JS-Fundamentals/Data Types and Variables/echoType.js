function echoType(value){

    let type = typeof value;
    console.log(typeof value);

    if(type === 'string' || type === 'number') {
        
        console.log(value);
    } else {
        console.log('Parameter is not suitable for printing');
    }
    
}
echoType('Hello, JavaScript!');