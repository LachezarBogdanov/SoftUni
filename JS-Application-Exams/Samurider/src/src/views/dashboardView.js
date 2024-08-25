import { html, render, page } from "../lib.js";
import { getAllMotorcycle } from "../util.js";
import { motorTemp } from "./patials/motorcycleTemp.js";


const temp = (allMotors) => html`
     <!-- Dashboard page -->
  <h2>Available Motorcycles</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${allMotors.length ? allMotors.map(motorTemp) : html `<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
  </section>
`

export async function dashboardView() {
    let allMotors = await getAllMotorcycle();

    render(temp(allMotors));
}