import { html, render, page } from "../lib.js";
import { getAllAlbums } from "../util.js";
import { albumTemp } from "./partials/albumTemp.js";


const temp = (allAlbums) => html`
     <!-- Dashboard page -->
  <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
      <!-- Display a li with information about every post (if any)-->
      ${allAlbums.length ? allAlbums.map(album => albumTemp(album)) : html`<h2>There are no albums added yet.</h2>`}
    </ul>

  </section>
`

export async function dashboardView() {
    let allAlbums = await getAllAlbums();

    render(temp(allAlbums));
}