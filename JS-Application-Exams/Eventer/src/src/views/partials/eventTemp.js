import {html} from '../../lib.js';

export const eventTemp = (event) => html`
    <div class="event">
      <img src=${event.imageUrl} alt="example1" />
      <p class="title">
        ${event.name}
      </p>
      <p class="date">${event.date}</p>
      <a class="details-btn" href="/data/events/${event._id}">Details</a>
    </div>
`