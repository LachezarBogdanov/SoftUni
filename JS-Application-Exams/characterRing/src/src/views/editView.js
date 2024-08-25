import { editCharacter, getCharacterById } from "../data/characters.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


    const editTemp = (data, onEdit) => html `
    <!-- Edit Page (Only for logged-in users) -->
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        .value=${data.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${data.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
      .value=${data.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
      .value=${data.moreInfo}
    ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export async function editView(ctx) {
    let id = ctx.params.id;

    let characterData = await getCharacterById(id);

    render(editTemp(characterData, createSubmitHandler(onEdit)));

    async function onEdit({
        category,
        'image-url': imageUrl,
        description,
        'additional-info': moreInfo
    }) {

        if(!category || !imageUrl || !description || !moreInfo) {
            return alert('All fields are required!');
        }

        await editCharacter(id, {
            category,
            imageUrl,
            description,
            moreInfo
        })

        page.redirect(`/data/characters/${id}`)
    }
}