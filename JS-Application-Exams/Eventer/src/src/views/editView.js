import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getEventById } from "../util.js";


const temp = (eventDetails, editHandler) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form class="edit-form" @submit=${editHandler}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Event"
          .value=${eventDetails.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image"
          .value=${eventDetails.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
          .value=${eventDetails.category}
        />


        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value=${eventDetails.description}
        ></textarea>
        
        <label for="date-and-time">Event Time:</label>
        <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
        .value=${eventDetails.date}
      />

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx){
    let id = ctx.params.id;

    let eventDetails = await getEventById(id);
    render(temp(eventDetails, createSubmitHandler(editHandler)));

    async function editHandler(data, form){
        let {category, date, description, imageUrl, name} = data;

        if(!category || !date || !description || !imageUrl || !name) {
            return alert('Please enter all fields for edit!');
        }

        await put('/data/events/' + id, {name, imageUrl, category, description, date});

        page.redirect('/data/events/' + id);
    }
}