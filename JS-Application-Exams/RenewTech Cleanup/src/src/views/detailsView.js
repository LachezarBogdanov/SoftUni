import { getTotalLikes, hasLiked, like } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getCartById, getUserData } from "../util.js";


const temp = (cartDetails, isOwner, hasUser, totalLikes, onLike, isLiked) => html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src=${cartDetails.imageUrl}
        alt="example1"
      />
      <div>
        <p id="details-type">${cartDetails.type}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">
              ${cartDetails.description}
            </p>
            <p id="more-info">
              ${cartDetails.learnMore}
            </p>
          </div>
        </div>
        <h3>Like Solution:<span id="like">${totalLikes}</span></h3>

        <!--Edit and Delete are only for creator-->
        ${isOwner ? html`
            <div id="action-buttons">
          <a href="/edit/${cartDetails._id}" id="edit-btn">Edit</a>
          <a href="/delete/${cartDetails._id}" id="delete-btn">Delete</a>
           </div>
        ` : html`
        ${hasUser && html `
        <div id="action-buttons">
            ${isLiked ? null : html`
            <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
            `}
            </div>` }
        `}
  </section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let cartDetails = await getCartById(id);
    
    let userData = await getUserData();
    let ownerId = cartDetails._ownerId;

    let userId = userData?._id;
    let isOwner = userId == ownerId;

    let totalLikes = await getTotalLikes(id);
    let isLiked = await hasLiked(id, userId);
    
    render(temp(cartDetails, isOwner, !!userData, totalLikes, onLike, isLiked));

    async function onLike() {
        debugger
        await like(id);

        page.redirect('/data/solutions/' + id);
    }
}