import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getProductById } from "../util.js";


const temp = (product, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Product</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          .value=${product.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="product-image"
          placeholder="Product Image"
          .value=${product.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="product-category"
          placeholder="Category"
          .value=${product.category}
        />
        <textarea
          id="product-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value=${product.description}
        ></textarea>

        <input
          type="text"
          name="price"
          id="product-price"
          placeholder="Price"
          .value=${product.price}
        />
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let product = await getProductById(id);

    render(temp(product, createSubmitHandler(onEdit)));

    async function onEdit(data, form){
        let {category, description, imageUrl, name, price} = data;

        if(!category || !description || !imageUrl || !name || !price) {
            return alert('All fields are required!');
        }

        await put('/data/products/' + id, {name, imageUrl, category, description, price});

        page.redirect('/data/products/' + id);
    }
}