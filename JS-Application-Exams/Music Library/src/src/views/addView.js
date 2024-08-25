import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onAdd) => html`
    <!-- Create Page (Only for logged-in users) -->
  <section id="create">
    <div class="form">
      <h2>Add Album</h2>
      <form class="create-form" @submit=${onAdd}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" name="album" id="album-album" placeholder="Album" />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" name="release" id="album-release" placeholder="Release date" />
        <input type="text" name="label" id="album-label" placeholder="Label" />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`

export async function addView() {
    render(temp(createSubmitHandler(onAdd)));

    async function onAdd(data) {
        let {album, imageUrl, label, release, sales, singer} = data;

        if(!album || !imageUrl || !label || !release || !sales || !singer) {
            return alert('All fields are required!');
        }

        await post('/data/albums', {singer, album, imageUrl, release, label, sales});

        page.redirect('/dashboard');
    }
}