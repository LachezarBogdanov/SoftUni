import { html, render, page } from "../lib.js";
import { getAllCars } from "../util.js";
import { carTemp } from "./partials/dashboardTemp.js";


const temp = (allCars) => html`
<h3 class="heading">Our Cars</h3>

<section id="dashboard">
    ${allCars.length ? 
         allCars.map(carTemp)
        :
         html `<!-- Display an h2 if there are no posts -->
        <h3 class="nothing">Nothing to see yet</h3>`}
</section>
`




export async function dashboardView() {
    let allCars = await getAllCars();
    
    render(temp(allCars));
}