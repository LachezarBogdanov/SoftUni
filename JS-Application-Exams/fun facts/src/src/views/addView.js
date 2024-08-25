import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onAdd) => html`
    <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Add Fact</h2>
      <form class="create-form" @submit=${onAdd}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
        <button type="submit">Add Fact</button>
      </form>
    </div>
  </section>
`

export async function addFact() {
    render(temp(createSubmitHandler(onAdd)));

    async function onAdd(data, form) {
        let {category, 'image-url': imageUrl, description, 'additional-info': moreInfo} = data;

        if(!category || !imageUrl || !description || !moreInfo) {
            return alert('All fields are required!');
        }

        await post('/data/facts', {category, imageUrl, description, moreInfo});

        page.redirect('/dashboard');
    }
}