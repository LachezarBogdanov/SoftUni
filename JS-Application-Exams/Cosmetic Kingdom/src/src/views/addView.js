import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onAdd) => html`
     <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Add Product</h2>
      <form class="create-form" @submit=${onAdd}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
        />
        <input
          type="text"
          name="imageUrl"
          id="product-image"
          placeholder="Product Image"
        />
        <input
          type="text"
          name="category"
          id="product-category"
          placeholder="Category"
        />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>

        <input
          type="text"
          name="price"
          id="product-price"
          placeholder="Price"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>

`

export async function addView() {
    render(temp(createSubmitHandler(onAdd)));

    async function onAdd(data, form) {
        let {category, description, imageUrl, name, price} = data;

        if(!category || !description || !imageUrl || !name || !price) {
            return alert('Nooo')
        }

        await post('/data/products/', {name, imageUrl, category, description, price});

        page.redirect('/dashboard');
    }
}