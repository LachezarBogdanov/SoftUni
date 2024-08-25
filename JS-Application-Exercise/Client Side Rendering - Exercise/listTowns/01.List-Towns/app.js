import { html, render } from '../node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
const divRoot = document.getElementById('root');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let towns = formData.get('towns');
    
    if(!towns) {
        return;
    }

    createListElements(towns);
}

function createListElements(towns) {
    let townsArr = towns.split(', ');

    let tempForLiItems = html `
        <ul>
            ${townsArr.map(el => html `<li>${el}</li>`)}
        </ul>
    `

    render(tempForLiItems, divRoot);
}