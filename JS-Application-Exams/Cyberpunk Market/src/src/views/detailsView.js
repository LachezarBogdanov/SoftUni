import { html, render } from "../lib.js";
import { getItemById, getUserData } from "../util.js";


const detailsTemp = (itemDetails, isOwner) => html`
     <!-- Details page -->

  <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src=${itemDetails.imageUrl} alt="example1" />
        <p id="details-title">${itemDetails.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${itemDetails.price}</p>
          <p class="details-availability">
            ${itemDetails.availability}
          </p>
          <p class="type">Type: ${itemDetails.type}</p>
          <p id="item-description">
            ${itemDetails.description}
          </p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${itemDetails._id}" id="edit-btn">Edit</a>
                <a href="/delete/${itemDetails._id}" id="delete-btn">Delete</a>
                </div>
        ` : ''}
      </div>
    </div>
  </section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let itemDetails = await getItemById(id);
    debugger
    let userData = await getUserData();
    let userId = userData?._id;

    let ownerId = itemDetails._ownerId;

    let isOwner = userId == ownerId;

    render(detailsTemp(itemDetails, isOwner));
}