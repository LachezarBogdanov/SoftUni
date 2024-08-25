import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getTattooById } from "../util.js";


const temp = (details, editHandler) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit tattoo</h2>
      <form class="edit-form" @submit=${editHandler}>
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Tattoo Type"
          .value=${details.type}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          .value=${details.imageUrl}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
          .value=${details.description}
        ></textarea>
        <select id="user-type" name="user-type" .value=${details.userType}>
          <option value="" disabled selected>Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">
            First Time in Tattoo
          </option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let details = await getTattooById(id);
    debugger    
    render(temp(details, createSubmitHandler(editHandler)));

    async function editHandler(data){
        let {description, 'image-url': imageUrl, type, 'user-type': userType} = data;
        
        if(!description || !imageUrl || !type || !userType) {
            return alert('Please enter all fields for edit an record!');
        }

        await put('/data/tattoos/' + id, {type, imageUrl, description, userType});

        page.redirect('/data/tattoos/' + id);
    }
}