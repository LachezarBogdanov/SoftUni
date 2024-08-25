import { html } from "../../lib.js";


export const productTemp = (product) => html`
    <div class="product">
      <img src=${product.imageUrl} alt="example1" />
      <p class="title">${product.name}</p>
      <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
      <a class="details-btn" href="/data/products/${product._id}">Details</a>
    </div>
`