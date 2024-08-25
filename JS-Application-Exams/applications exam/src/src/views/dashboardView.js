import { html, render, page } from "../lib.js";
import { getAllTattoos } from "../util.js";
import { tattooTemp } from "./tattooTempMaker/tattooTemp.js";


const temp = (allTattos) => html`
     <!-- Dashboard page -->
  <h2>Collection</h2>
  <section id="tattoos">
    <!-- Display a div with information about every post (if any)-->
    ${allTattos.length ? allTattos.map(tattoo => tattooTemp(tattoo)) : html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
  </section>
  <!-- Display an h2 if there are no posts -->
  
`

export async function dashboardView() {
    let allTattos = await getAllTattoos();

    
    render(temp(allTattos));
}