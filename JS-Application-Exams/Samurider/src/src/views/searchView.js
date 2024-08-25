import { get } from "../data/api.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onSearch, motorFound) => html`
    <!-- Search page -->
 <section id="search">

<div class="form">
  <h4>Search</h4>
  <form class="search-form" @submit=${onSearch}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</section>

 ${motorFound?.length ? motorFound.map(motor => html`
    <section id="search">
    <h4 id="result-heading">Results:</h4>
  <div class="search-result">
  <!--If there are matches display a div with information about every motorcycle-->
 <div class="motorcycle">
  <img src=${motor.imageUrl} alt="example1" />
  <h3 class="model">${motor.model}</h3>
    <a class="details-btn" href="/data/motorcycles/${motor._id}">More Info</a>
</div>
  </div>
  </section>
 `): html`
 <section id="search">
  <h4 id="result-heading">Results:</h4>
    <div class="search-result">
   <h2 class="no-avaliable">No result.</h2>
 </div>
 </section>
 `}
</div>

`

export async function searchView() {
    render(temp(createSubmitHandler(onSearch)));

    async function onSearch(data, form) {
        debugger
        let searchText = data.search;

        if(!searchText) {
            return alert('The input field are empty!');
        }

        let motor = await get(`/data/motorcycles?where=model%20LIKE%20%22${searchText}%22`)

        render(temp(createSubmitHandler(onSearch), motor));
    }
}