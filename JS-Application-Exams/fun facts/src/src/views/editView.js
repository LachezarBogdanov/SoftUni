import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getFactById } from "../util.js";


const temp = (fact, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value=${fact.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${fact.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
      .value=${fact.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="10"
      cols="50"
      .value=${fact.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let factDetails = await getFactById(id);
    
    render(temp(factDetails, createSubmitHandler(onEdit)));

    async function onEdit(data, form){
        let {'additional-info': moreInfo, category, description, 'image-url': imageUrl} = data;
        
        if(!moreInfo || !category || !description || !imageUrl) {
            return alert('All fields are required!');
        }

        await put('/data/facts/' + id, {category, imageUrl, description, moreInfo});

        page.redirect('/data/facts/' + id);
    }
}