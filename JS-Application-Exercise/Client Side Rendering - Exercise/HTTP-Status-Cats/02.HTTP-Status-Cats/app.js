import { html, render } from '../node_modules/lit-html/lit-html.js';

import {cats} from './catSeeder.js';

const sectionForCats = document.getElementById('allCats');

render(createUl(), sectionForCats);

function createUl() {
    return html `
    <ul>
    ${cats.map((cat, i) => createLiCats(cat))}
    </ul>
    `
}

function createLiCats(cat) {
    return html `
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${togleStatusInfo}>Show status code</button>
                <div class="status" style="display: none" id=${cat.id}>
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>
        `
    }


    function togleStatusInfo(e) {
        let hiddenDiv = e.target.parentElement.querySelector('div');
        let btn = e.target.parentElement.querySelector('button');
        let currentState = hiddenDiv.style.display;

        hiddenDiv.style.display = currentState == 'none' ? 'block' : 'none';
        btn.textContent = btn.textContent == 'Show status code' ? 'Hide status code' : 'Show status code';
    }
