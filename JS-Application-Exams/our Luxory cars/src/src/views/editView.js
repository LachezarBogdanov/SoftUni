import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { getCarById, createSubmitHandler } from "../util.js";


const temp = (carInfo, onEdit) => html`
     <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" name="model" id="model" placeholder="Model" .value=${carInfo.model}/>
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
          .value=${carInfo.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          .value=${carInfo.price}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
          .value=${carInfo.weight}
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
          .value=${carInfo.speed}
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
          .value=${carInfo.about}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;
    debugger
    let carInfo = await getCarById(id);
    
    render(temp(carInfo, createSubmitHandler(onEdit)));

    async function onEdit(data, form) {
        
        let {about, imageUrl, model, price, speed, weight} = data;
        
        if(!about || !imageUrl || !model || !price || !speed || !weight) {
            return alert('All fields are required!');
        }

        await put('/data/cars/' + id,{ model, imageUrl, price, weight, speed, about });

        page.redirect('/data/cars/' + id);
    }
}