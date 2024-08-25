import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getFruitById } from "../util.js";


const temp = (fruitDetails, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
          .value=${fruitDetails.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image URL"
          .value=${fruitDetails.imageUrl}
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
          .value=${fruitDetails.description}
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
          .value=${fruitDetails.nutrition}
        ></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {

    let id = ctx.params.id;

    let fruitDetails = await getFruitById(id);
    
    render(temp(fruitDetails, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        let {description, imageUrl, name, nutrition} = data;

        if(!description || !imageUrl || !name || !nutrition) {
            return alert('All fields are required!');
        }

        await put('/data/fruits/' + id, {name, imageUrl, description, nutrition});

        page.redirect('/data/fruits/' + id);
    }
}

