import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getMotorcycleById } from "../util.js";


const temp = (motorDetails, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
      <h2>Edit Motorcycle</h2>
      <div class="form">
        <h2>Edit Motorcycle</h2>
        <form class="edit-form" @submit=${onEdit}>
          <input
            type="text"
            name="model"
            id="model"
            placeholder="Model"
            .value=${motorDetails.model}
          />
          <input
            type="text"
            name="imageUrl"
            id="moto-image"
            placeholder="Moto Image"
            .value=${motorDetails.imageUrl}
          />
          <input
          type="number"
          name="year"
          id="year"
          placeholder="Year"
          .value=${motorDetails.year}
        />
        <input
        type="number"
        name="mileage"
        id="mileage"
        placeholder="mileage"
        .value=${motorDetails.mileage}
      />
      <input
        type="number"
        name="contact"
        id="contact"
        placeholder="contact"
        .value=${motorDetails.contact}
      />
        <textarea
          id="about"
          name="about"
          placeholder="about"
          rows="10"
          cols="50"
          .value=${motorDetails.about}
        ></textarea>
          <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
  </section>
  
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let motorDetails = await getMotorcycleById(id);
    render(temp(motorDetails, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        let {about, contact, imageUrl, mileage, model, year} = data;

        if(!about || !contact || !imageUrl || !mileage || !model || !year) {
            return alert('All fields are required!');
        }

        await put('/data/motorcycles/' + id, {model, imageUrl, year, mileage, contact, about});

        page.redirect('/data/motorcycles/' + id);
    }
}