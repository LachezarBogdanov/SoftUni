import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getItemById } from "../util.js";
import { notificationHandler } from "./notification.js";


const editTemp = (itemDetails, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" name="item" id="item" .value=${itemDetails.item} placeholder="Item"/>
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
          .value=${itemDetails.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          .value=${itemDetails.price}
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
          .value=${itemDetails.availability}
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
          .value=${itemDetails.type}
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
          .value=${itemDetails.description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let itemDetails = await getItemById(id);
  
    render(editTemp(itemDetails, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        let {availability, description, imageUrl, item, price, type} = data;

        if(!availability || !description || !imageUrl || !item || !price || !type) {
            return notificationHandler('All fields are required!');
        }

        await put('/data/cyberpunk/' + id, {item, imageUrl, price, availability, type, description});

        page.redirect('/data/cyberpunk/' + id);
    }
}