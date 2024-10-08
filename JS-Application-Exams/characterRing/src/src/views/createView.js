import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";


const createTemp = (createForm) => html`
    <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form class="create-form" @submit=${createForm}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`;

export async function onCreate() {
    render(createTemp(createSubmitHandler(createForm)));

    async function createForm(data, form) {
        
        let {category, 'image-url': imageUrl, description, 'additional-info': moreInfo} = data;

        let userData = getUserData();

        if(userData != undefined) {
            if(!category || !imageUrl || !description || !moreInfo) {
                return alert('All fields are required!');
            }
    
            await post('/data/characters', {category, imageUrl, description, moreInfo});
    
            page.redirect('/characters');
        }
        
    }
}