import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (addHandler) => html`
    <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Add tattoo</h2>
      <form class="create-form" @submit=${addHandler}>
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Tattoo Type"
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
          rows="2"
          cols="10"
        ></textarea>
        <select id="user-type" name="user-type">
          <option value="" disabled selected>Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">
            First Time in Tattoo
          </option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Add tattoo</button>
      </form>
    </div>
  </section>
`

export async function addView() {
    render(temp(createSubmitHandler(addHandler)));

    async function addHandler(data) {
        let {description, 'image-url': imageUrl, type, 'user-type': userType} = data;

        if(!description || !imageUrl || !type || !userType) {
            return alert('Please enter all fields for add an record!');
        }

        await post('/data/tattoos', {type, imageUrl, description, userType});

        page.redirect('/dashboard');
    }
}