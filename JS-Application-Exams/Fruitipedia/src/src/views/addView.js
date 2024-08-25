import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onAdd) => html`
    <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form class="create-form" @submit=${onAdd}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image"
        />
        <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>
`

export async function addView() {
    render(temp(createSubmitHandler(onAdd)));

    async function onAdd(data, form){
        let {description, imageUrl, name, nutrition} = data;

        if(!description || !imageUrl || !name || !nutrition) {
            return alert('All fields are required!');
        }

        await post('/data/fruits', {name, imageUrl, description, nutrition});

        page.redirect('/dashboard');
    }
}