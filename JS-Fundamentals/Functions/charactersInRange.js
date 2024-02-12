function charactersInRange (firstChar, secondChar) {

    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let smallerCharCode = Math.min(firstCode, secondCode);
    let largerCode = Math.max(firstCode, secondCode);
   
    let result = '';
    for(let i = smallerCharCode + 1; i < largerCode; i++) {
      result += String.fromCharCode(i) + ' ';
    }
    
    console.log(result);

}
charactersInRange('a',
'd');