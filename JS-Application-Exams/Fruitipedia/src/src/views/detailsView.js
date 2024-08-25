import { html, render, page } from "../lib.js";
import { getFruitById, getUserData } from "../util.js";


const temp = (itemDetails, isOwner) => html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${itemDetails.imageUrl} alt="example1" />
      <p id="details-title">${itemDetails.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>
            ${itemDetails.description}
            </p>
              <p id="nutrition">Nutrition</p>
             <p id = "details-nutrition">
                ${itemDetails.nutrition}
                  </p>
        </div>
         <!--Edit and Delete are only for creator-->
         ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${itemDetails._id}" id="edit-btn">Edit</a>
                <a href="/delete/${itemDetails._id}" id="delete-btn">Delete</a>
                </div>
         `: ''}
      </div>
  </div>
</section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let itemDetails = await getFruitById(id);

    let userData = await getUserData();

    let userId = userData?._id;
    let ownerId = itemDetails._ownerId;

    let isOwner = userId == ownerId;

    render(temp(itemDetails, isOwner));
}