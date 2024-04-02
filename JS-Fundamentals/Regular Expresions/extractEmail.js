function extractEmail (input){

    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@([a-z]+\-?[a-z]+)(\.[a-z]+)+/g;

    let match = input.match(pattern);

    match.forEach(el => console.log(el));
    

}
extractEmail('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information');