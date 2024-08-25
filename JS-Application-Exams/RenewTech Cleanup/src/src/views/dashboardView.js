import { html, render, page } from "../lib.js";
import { getAllCarts } from "../util.js";
import { cartTemp } from "./partials/cartTemp.js";


const temp = (allCarts) => html`
     <!-- Dashboard page -->
  <h2>Solutions</h2>
  <section id="solutions">
    <!-- Display a div with information about every post (if any)-->
    ${allCarts.length ? allCarts.map(cart => cartTemp(cart)) : html`<h2 id="no-solution">No Solutions Added.</h2>`}
  </section>
`

export async function dashboardView() {

    let allCarts = await getAllCarts();
    
    render(temp(allCarts));
}