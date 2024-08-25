import { get } from "../data/api.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onSearch, result) => html`

  <!-- Search page -->
  <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form class="search-form" @submit=${onSearch}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>

    ${result?.length ? html`
        <div class="search-result">
      <!--If there are matches display a div with information about every motorcycle-->
      ${result.map(car => html`
      <div class="car">
        <img src=${car.imageUrl} alt="example1"/>
        <h3 class="model">${car.model}</h3>
        <a class="details-btn" href="/data/cars/${car._id}">More Info</a>
      </div>
    </div>
      `)}
  </section>
    ` : html`
     <div class="search-result">
        <h2 class="no-avaliable">No result.</h2>
         </div>
    `}
`

export async function searchView() {
    
    render(temp(createSubmitHandler(onSearch)));

    async function onSearch(data, form){
        let searchText = data.search;
        
        
        let searchedCars = await get(`/data/cars?where=model%20LIKE%20%22${searchText}%22`);

        render(temp(createSubmitHandler(onSearch), searchedCars));
    }
}