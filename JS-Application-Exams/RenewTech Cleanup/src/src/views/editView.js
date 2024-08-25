import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getCartById } from "../util.js";


const temp = (cartDetails, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Edit Solution</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Solution Type"
          .value=${cartDetails.type}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          .value=${cartDetails.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
          .value=${cartDetails.description}
        ></textarea>
        <textarea
          id="more-info"
          name="more-info"
          placeholder="more Info"
          rows="2"
          cols="10"
          .value=${cartDetails.learnMore}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {

    let id = ctx.params.id;

    let cartDetails = await getCartById(id);

    render(temp(cartDetails, createSubmitHandler(onEdit)));

    async function onEdit(data, form){
        let {description, 'image-url': imageUrl, 'more-info': learnMore, type} = data;

        
        if(!description || !imageUrl || !learnMore || !type) {
            return alert('All fields are required!');
        }

        await put('/data/solutions/' + id, {type, imageUrl, description, learnMore});

        page.redirect('/data/solutions/' + id);
    }
}