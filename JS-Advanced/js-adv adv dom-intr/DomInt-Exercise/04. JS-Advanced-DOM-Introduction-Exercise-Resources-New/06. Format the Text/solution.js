function solve() {
  let text = document.getElementById('input').value;

  let splittedText = text.split('.').filter(e => e.length > 0);
  let outputArea = document.getElementById('output');
  
  for(let i = 0; i < splittedText.length; i += 3) {
    let curP = [];
    for(let x = 0; x < 3; x++) {
      if(!splittedText[i + x]) {
        break;
      }
      curP.push(splittedText[i + x]);
    }
    let p = document.createElement('p');
    p.textContent = curP.join('.') + '.';
    outputArea.appendChild(p);
  }
}