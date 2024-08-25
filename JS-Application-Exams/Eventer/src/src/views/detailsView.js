import { html, render, page } from "../lib.js";
import { getEventById, getUserData } from "../util.js";


const temp = (eventDetails, isOwner, hasUser) => html`
     <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${eventDetails.imageUrl} alt="example1" />
      <p id="details-title">${eventDetails.name}</p>
      <p id="details-category">
        Category: <span id="categories">${eventDetails.category}</span>
      </p>
      <p id="details-date">
        Date:<span id="date">${eventDetails.date}</span></p>
      <div id="info-wrapper">
        <div id="details-description">
          <span>
            ${eventDetails.description}
        </span>
        </div>
      </div>

      ${isOwner ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="/edit/${eventDetails._id}" id="edit-btn">Edit</a>
            <a href="/delete/${eventDetails._id}" id="delete-btn">Delete</a>
            </div>
      ` : html`
      ${hasUser ? html`
      <div id="action-buttons">
          <a href="javascript:void(0)" id="go-btn">Going</a>
          </div>
      ` : ''} 
      `}

      </div>
    </div>
  </section>`


export async function detailsView(ctx) {
    let id = ctx.params.id; 
    debugger
    let eventDetails = await getEventById(id);
    let userData = await getUserData();

    let userId = userData?._id;
    let ownerId = eventDetails._ownerId;

    let isOwner = userId == ownerId;
    
    render(temp(eventDetails, isOwner, !!userData));
}