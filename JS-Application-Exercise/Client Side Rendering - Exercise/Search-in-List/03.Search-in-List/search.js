import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from "./towns.js";

const townRoot = document.getElementById('towns');
const searchInput = document.getElementById('searchText');
const resultDiv = document.getElementById('result');

document.querySelector('button').addEventListener('click', search);

search();
function search(e) {
   
   let searchText = '';

   if(e) {
      searchText = searchInput.value;
   }
   let temp = towns.map(el => html `${createTemp(el, searchText)}`);
   let listTownRef = html `<ul>${temp}</ul>`

   render(listTownRef, townRoot);

   let matches = towns.filter(el => el.includes(searchText));

   if(searchText !== '') {
      renderMatches(matches.length)
   } else {
      resultDiv.textContent = '';
   }
}

function createTemp(el, text) {
   
   let isMatch = el.includes(text);

   if(text === '') {
      isMatch = false;
   }
   return html `
      <li class=${isMatch ? "active" : ""}>${el}</li>
   `
}

function	renderMatches(count) {
   resultDiv.textContent = `${count} matches found`
}