function wordsUpperCase (text){

    console.log(text.toUpperCase().split(/\W+/g).filter(word => !!word).join(', '));
    
}
wordsUpperCase('hello');