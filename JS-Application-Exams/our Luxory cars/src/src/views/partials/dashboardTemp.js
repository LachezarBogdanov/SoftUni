import { html } from "../../lib.js";


export const carTemp = (car) => html `
  <!-- Dashboard page -->
  
  
    <!-- Display a div with information about every post (if any)-->
    <div class="car">
      <img src=${car.imageUrl} alt="example1" />
      <h3 class="model">${car.model}</h3>
      <div class="specs">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
      </div>
      <a class="details-btn" href='/data/cars/${car._id}'>More Info</a>
    </div>
`