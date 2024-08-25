import { html, render } from "../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/table';
const tBody = document.querySelector('tbody');
const searchField = document.getElementById('searchField');

solve();
async function solve() {
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let response = await fetch(url);
   let data = await response.json();

   let temp = Object.values(data).map(el => tbodyTemp(el));

   render(temp, tBody);
}

async function onClick() {
   debugger
   let text = searchField.value.toLowerCase();

   let rows = Array.from(tBody.getElementsByTagName('tr'));
   
   rows.forEach(row => row.classList.remove('select'));

   if(text) {
      rows.forEach(row => {
         if(Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(text))) {
            row.classList.add('select');
         }
      })
   }

}


let tbodyTemp = (el, classList) =>  {
   return html `
      <tr class=${classList ? 'select' : ''}>
                <td>${el.firstName} ${el.lastName}</td>
                <td>${el.email}</td>
                <td>${el.course}</td>
            </tr>
   `
}
