import { get } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";


const temp = (fact, isOwner, hasUser) => html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${fact.imageUrl} alt="example1" />
      <p id="details-category">${fact.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">
            ${fact.description}
            </p>
             <p id ="more-info">
              ${fact.moreInfo}
                  </p>
        </div>

        <h3>Likes:<span id="likes">0</span></h3>

              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`
                <div id="action-buttons">
      <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
      <a href="/delete/${fact._id}" id="delete-btn">Delete</a>
       </div>`: html`
       ${hasUser ? html`
       <div id="action-buttons">
       <a href="" id="like-btn">Like</a>
       </div>
       ` : ''}
       `}
</section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;
    let details = await get('/data/facts/' + id);

    let ownerId = details._ownerId;
    let userId = await getUserData()?._id;

    let userData = await getUserData();

    let isOwner = ownerId == userId;
    
    render(temp(details, isOwner, !!userData));
}