import { html } from "../../lib.js";


export const cartTemp = (cart) => html`
    <div class="solution">
      <img src=${cart.imageUrl} alt="example1" />
      <div class="solution-info">
        <h3 class="type">${cart.type}</h3>
        <p class="description">
         ${cart.description}
        </p>
        <a class="details-btn" href="/data/solutions/${cart._id}">Learn More</a>
      </div>
    </div>
`