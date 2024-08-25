import { html } from "../../lib.js";


export const tattooTemp = (tattoo) => html`
    <div class="tattoo">
      <img src=${tattoo.imageUrl} alt="example1" />
      <div class="tattoo-info">
        <h3 class="type">${tattoo.type}</h3>
        <span>Uploaded by </span>
        <p class="user-type">${tattoo.userType}</p>
        <a class="details-btn" href="/data/tattoos/${tattoo._id}">Learn More</a>
      </div>
    </div>
`