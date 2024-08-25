import { html, render, page } from "../lib.js";
import { getAllFacts } from "../util.js";
import { cardTemp } from "./partials/cardTemp.js";


const temp = (allFacts) => html`
    <!-- Dashboard page -->
  <h2>Fun Facts</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
        ${allFacts.length ? allFacts.map(cardTemp) : html`<h2>No Fun Facts yet.</h2>`}
  </section>
`

export async function dashboardView() {
    let allFacts = await getAllFacts();
    
    render(temp(allFacts));
}