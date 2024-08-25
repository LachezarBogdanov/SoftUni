import { html } from "../../lib.js";

export const fruitTemp = (fruit) => html`
    <div class="fruit">
      <img src=${fruit.imageUrl} alt="example1" />
      <h3 class="title">${fruit.name}</h3>
      <p class="description">${fruit.description}</p>
      <a class="details-btn" href="/data/fruits/${fruit._id}">More Info</a>
    </div>
`