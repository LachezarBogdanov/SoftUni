import { html } from "../../lib.js";


export const itemTemp = (item) => html`
     <div class="item">
      <img src=${item.imageUrl} alt="example1" />
      <h3 class="model">${item.item}</h3>
      <div class="item-info">
        <p class="price">Price: €${item.price}</p>
        <p class="availability">
          ${item.availability}
        </p>
        <p class="type">Type: ${item.type}</p>
      </div>
      <a class="details-btn" href="/data/cyberpunk/${item._id}">Uncover More</a>
    </div>
`