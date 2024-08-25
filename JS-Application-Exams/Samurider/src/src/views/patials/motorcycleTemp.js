import { html } from "../../lib.js";


export const motorTemp = (motor) => html`
    <div class="motorcycle">
      <img src=${motor.imageUrl} alt="example1" />
      <h3 class="model">${motor.model}</h3>
      <p class="year">Year: ${motor.year}</p>
      <p class="mileage">Mileage: ${motor.mileage} km.</p>
      <p class="contact">Contact Number: ${motor.contact}</p>
      <a class="details-btn" href="/data/motorcycles/${motor._id}">More Info</a>
    </div>
`