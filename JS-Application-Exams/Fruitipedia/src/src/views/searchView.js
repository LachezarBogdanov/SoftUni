import { get } from "../data/api.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onSearch, foundFruit) => html`
    <!-- Search page -->
 <section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form" @submit=${onSearch}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
  <!--If there are matches display a div with information about every fruit-->
  ${foundFruit?.length ? foundFruit.map(fruit => html`
     <div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/data/fruits/${fruit._id}">More Info</a>
</div>
  `): html`
         <p class="no-result">No result.</p>
  `}
  </div>
        </section>
`

export async function searchView() {
    render(temp(createSubmitHandler(onSearch)));

    async function onSearch(data, form) {
        let searchName = data.search;
        debugger
        if(!searchName) {
            return alert('All fields are required!');
        }

        let foundFruit = await get(`/data/fruits?where=name%20LIKE%20%22${searchName}%22`);
        render(temp(onSearch, foundFruit));
    }
}