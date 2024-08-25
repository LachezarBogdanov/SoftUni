import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getAlbumById } from "../util.js";


const temp = (albumDetails, onEdit) => html`
    <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <h2>Edit Album</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" name="singer" id="album-singer" .value=${albumDetails.singer} placeholder="Singer/Band"/>
        <input type="text" name="album" id="album-album" .value=${albumDetails.album} placeholder="Album"/>
        <input type="text" name="imageUrl" id="album-img" .value=${albumDetails.imageUrl} placeholder="Image url"/>
        <input type="text" name="release" id="album-release" .value=${albumDetails.release} placeholder="Release date"/>
        <input type="text" name="label" id="album-label" .value=${albumDetails.label} placeholder="Label"/>
        <input type="text" name="sales" id="album-sales" .value=${albumDetails.sales} placeholder="Sales"/>

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let albumDetails = await getAlbumById(id);
    
    render(temp(albumDetails, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        let {album, imageUrl, label, release, sales, singer} = data;

        if(!album || !imageUrl || !label || !release || !sales || !singer) {
            return alert('All fields are required!');
        }

        await put('/data/albums/' + id, {singer, album, imageUrl, release, label, sales});

        page.redirect('/data/albums/' + id);
    }
}