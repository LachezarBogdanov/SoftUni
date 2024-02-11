function foreignLanguages(country){

    let countryName = country;

    switch(countryName){
        case 'USA':
        case 'England':
            console.log('English');
            break;

        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
    }
}
foreignLanguages('USA');