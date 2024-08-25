import { getAllCharacters } from "../data/characters.js";
import { html, render } from "../lib.js";
import { charTemp } from "./partials/characterTemp.js";

const temp = (characters) => html`
<h2>Characters</h2>
<section id="characters">

${characters.length ? characters.map(char => charTemp(char)) : html` <h2>No added Heroes yet.</h2> `}

</section>
`

export async function charactersView() {
    
    let characters = await getAllCharacters();
    render(temp(characters));
}

