import { html } from "../../lib.js";


export const cardTemp = (card) => html`
    <div class="fact">
      <img src=${card.imageUrl} alt="example1" />
      <h3 class="category">${card.category}</h3>
      <p class="description">${card.description}</p>
      <a class="details-btn" href="/data/facts/${card._id}">More Info</a>
    </div>
`