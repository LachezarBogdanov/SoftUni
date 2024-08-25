import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (addHandler) => html`
     <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form class="create-form" @submit=${addHandler}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Event"
        />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image URL"
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
        />


        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>
        
        <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
      />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`

export async function addView() {
    render(temp(createSubmitHandler(addHandler)));

    async function addHandler(data, form){
        let {category, date, description, imageUrl, name} = data;

        if(!category || !date || !description || !imageUrl || !name) {
            return alert('Please enter all fields to add an event!');
        }

        await post('/data/events', {name, imageUrl, category, description, date});

        page.redirect('/dashboard');
    }
}