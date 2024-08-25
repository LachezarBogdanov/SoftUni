import { html, render } from "../lib.js";
import { getAllItems } from "../util.js";
import { itemTemp } from "./partials/itemTemp.js";


const temp = (allItems) => html`
    <!-- Dashboard page -->
  <h3 class="heading">Market</h3>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
   ${allItems.length ? allItems.map(item => itemTemp(item)) : html`<h3 class="empty">No Items Yet</h3>`}
  </section>
  <!-- Display an h2 if there are no posts -->

`

export async function dashboardView() {
    let allItems = await getAllItems();
    debugger
    render(temp(allItems));
}