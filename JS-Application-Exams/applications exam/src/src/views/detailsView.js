import { html, render, page } from "../lib.js";
import { getTattooById, getUserData } from "../util.js";


const temp = (tattooDetails, isOwner, hasUser) => html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src=${tattooDetails.imageUrl}
        alt="example1"
      />
      <div>
        <div id="info-wrapper">
          <p id="details-type">${tattooDetails.type}</p>
          <div id="details-description">
            <p id="user-type">${tattooDetails.userType}</p>
            <p id="description">
              ${tattooDetails.description}
            </p>
          </div>
          <h3>Like tattoo:<span id="like">0</span></h3>
          <!--Edit and Delete are only for creator-->
          ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${tattooDetails._id}" id="edit-btn">Edit</a>
                <a href="/delete/${tattooDetails._id}" id="delete-btn">Delete</a>
                
                <!--Bonus - Only for logged-in users ( not authors )-->
                </div>
          `: html`
            ${hasUser ? html`
            <div id="action-buttons">
                <a href="/like/:id" id="like-btn">Like</a>
                </div>
            `: ''}
          `}
        </div>
      </div>
    </div>
  </section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let tattooDetails = await getTattooById(id);

    let userData = await getUserData();

    let userId = userData?._id;
    let ownerId = tattooDetails._ownerId;

    let isOwner = userId == ownerId;
    
    render(temp(tattooDetails, isOwner, !!userData));
}