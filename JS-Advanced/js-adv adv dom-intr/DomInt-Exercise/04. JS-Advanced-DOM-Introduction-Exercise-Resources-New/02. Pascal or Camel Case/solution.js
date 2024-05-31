function solve() {
    let inputText = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;

    let words = inputText.toLowerCase().split(' ');
    let wordsToGet = null;

    if(currentCase === 'Camel Case') {
        wordsToGet = words.map((el, index) => {
          if(index === 0) {
            return el;
          }
          return el.charAt(0).toUpperCase() + el.slice(1);
        }).join(''); 
    } else if(currentCase === 'Pascal Case') {
      wordsToGet = words.map(el => {
       return el.charAt(0).toUpperCase() + el.slice(1)
    }).join('');
    } else {
      wordsToGet = 'Error!';
    }

    let resultArea = document.getElementById('result');
    resultArea.textContent = wordsToGet;
    
}