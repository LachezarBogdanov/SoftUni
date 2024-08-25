import { html, render } from "../lib.js";
import { getAllProducts } from "../util.js";
import { productTemp } from "./partials/productTemp.js";


const temp = (allProducts) => html`
     <!-- Dashboard page -->
  <h2>Products</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${allProducts.length ? allProducts.map(product => productTemp(product)) : html`<h2>No products yet.</h2>`}
  </section>
  <!-- Display an h2 if there are no posts -->
`

export async function dashboardView() {
    let allProducts = await getAllProducts();
    
    render(temp(allProducts));
}