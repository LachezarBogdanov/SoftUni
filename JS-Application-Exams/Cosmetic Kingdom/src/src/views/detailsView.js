import { html, render, page } from "../lib.js";
import { getProductById, getUserData } from "../util.js";


const temp = (productDet, isOwner, hasUser) => html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src=${productDet.imageUrl}
        alt="example1"
      />
      <p id="details-title">${productDet.name}</p>
      <p id="details-category">
        Category: <span id="categories">${productDet.category}</span>
      </p>
      <p id="details-price">
        Price: <span id="price-number">${productDet.price}</span>$
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Bought: <span id="buys">0</span> times.</h4>
          <span
            >${productDet.description}</span
          >
        </div>
      </div>

      ${isOwner ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="/edit/${productDet._id}" id="edit-btn">Edit</a>
            <a href="/delete/${productDet._id}" id="delete-btn">Delete</a>
            
            <!--Bonus - Only for logged-in users ( not authors )-->
        </div>
      ` : html`
        ${hasUser ? html`
        <div id="action-buttons">
        <a href="" id="buy-btn">Buy</a>
        </div>
        `: ''}
      `}
    </div>
  </section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let productDet = await getProductById(id);
    
    let userData = await getUserData();

    let userId = userData?._id;
    let ownerId = productDet._ownerId;

    let isOwner = userId == ownerId;

    render(temp(productDet, isOwner, !!userData));
}