function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let inputText = document.getElementById('searchField');
   let arrayLiElements =document.querySelectorAll('tbody tr');

   function onClick() {

      let searchText = inputText.value;

      for (let row of arrayLiElements) {
         let tableDataRef = row.querySelectorAll('td');

         for (let data of tableDataRef) {
            if(data.textContent.includes(searchText)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select');
            }
         }
      }
   }
}