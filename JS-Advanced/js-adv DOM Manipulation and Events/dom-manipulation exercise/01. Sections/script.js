function create(words) {

   const divArea = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      let divEl = document.createElement('div');
      divArea.append(divEl);
   }

   const allDivs = document.querySelectorAll('#content div');

   for (let curDiv of allDivs) {
      let pEl = document.createElement('p');
      pEl.textContent = words.shift();
      pEl.style.display = 'none';
      curDiv.append(pEl);

      curDiv.addEventListener('click', showText);
   }

   function showText (event) {
      let currentDiv = event.currentTarget.children[0];
      let currentStyle = currentDiv.style.display
      currentDiv.style.display = currentStyle === 'none' ? 'block' : 'none';
   }
}