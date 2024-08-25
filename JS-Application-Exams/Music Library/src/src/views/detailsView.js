import { html, render, page } from "../lib.js";
import { getAlbumById, getUserData } from "../util.js";


const temp = (albumDetails, isOwner, hasUser) => html`
    <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src=${albumDetails.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${albumDetails.singer}</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">${albumDetails.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${albumDetails.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${albumDetails.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${albumDetails.sales}</span></p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>

      <!--Edit and Delete are only for creator-->
      ${isOwner ? html`
        <div id="action-buttons">
            <a href="/edit/${albumDetails._id}" id="edit-btn">Edit</a>
            <a href="/delete/${albumDetails._id}" id="delete-btn">Delete</a>
            </div>
      ` : html`
      ${hasUser ? html`
      <div id="action-buttons">
          <a href="" id="like-btn">Like</a>
          </div>
      `: ''}
      `}
    </div>
  </section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let albumDetails = await getAlbumById(id);
    let userData = await getUserData();

    let userId = userData?._id;
    let ownerId = albumDetails._ownerId;

    let isOwner = userId == ownerId;

    render(temp(albumDetails, isOwner, !!userData));
}