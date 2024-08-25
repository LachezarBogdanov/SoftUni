import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (addCar) => html`
    <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form form-auto">
      <h2>Share Your Car</h2>
      <form class="create-form" @submit=${addCar}>
        <input type="text" name="model" id="model" placeholder="Model"/>
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`

export async function addCarView() {
    render(temp(createSubmitHandler(onAddCar)));

    async function onAddCar(data, form){
        let {about, imageUrl, model, price, speed, weight} = data;
        
        if(!about || !imageUrl || !model || !price || !speed || !weight) {
            return alert('All fields are required!');
        }

        await post('/data/cars', {model, imageUrl, price, weight, speed, about});

        page.redirect('/dashboard');
    }
}