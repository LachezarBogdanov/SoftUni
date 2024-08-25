import { html, render, page } from "../lib.js";
import { getAllFruits } from "../util.js";
import { fruitTemp } from "./partials/fruitTemp.js";


const temp = (allFruits) => html`
    <!-- Dashboard page -->
  <h2>Fruits</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${allFruits.length ? allFruits.map(fruit => fruitTemp(fruit)) : html`<h2>No fruit info yet.</h2>`}
  </section>
   <!-- Display an h2 if there are no posts -->

`

export async function dashboardView() {

    let allFruits = await getAllFruits();
    render(temp(allFruits));
}