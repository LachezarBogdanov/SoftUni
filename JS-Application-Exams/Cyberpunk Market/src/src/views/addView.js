import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { notificationHandler } from "./notification.js";

const addTemp = (addItem) => html`
     <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form class="create-form" @submit=${addItem}>
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`

export async function addView() {
    render(addTemp(createSubmitHandler(addItem)));

    async function addItem(data, form){
        let {availability, description, imageUrl, item, price, type} = data;

        if(!availability || !description || !imageUrl || !item || !price || !type) {
            return notificationHandler('All fields are required!');
        }

        await post('/data/cyberpunk', {item, imageUrl, price, availability, type, description});

        page.redirect('/dashboard');
    }
}