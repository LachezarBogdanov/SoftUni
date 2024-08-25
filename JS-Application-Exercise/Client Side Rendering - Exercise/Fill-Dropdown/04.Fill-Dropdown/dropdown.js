import { html, render } from "../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const select = document.getElementById('menu');
const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);
addItem();
async function addItem() {
    let response = await fetch(url);
    let data = await response.json();
    let items = Object.values(data);
    
    let temp = items.map(el => createTemp(el));

    render(temp, select);
}

function createTemp(el) {
    return html `
    <option value=${el._id}>${el.text}</option>
    `
}

async function onSubmit(e) {
    e.preventDefault();

    const itemText = document.getElementById('itemText').value;

    if(!itemText) {
        return;
    }
    
    let data = {
        text: itemText
    }
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    });

    addItem();
    e.target.reset();
}