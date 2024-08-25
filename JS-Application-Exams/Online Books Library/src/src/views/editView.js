import { put } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getBookById } from "../util.js";


const temp = (bookDetails, onEdit) => html`
    <!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit=${onEdit}>
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${bookDetails.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" .value=${bookDetails.description}></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${bookDetails.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${bookDetails.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`

export async function editView(ctx) {

    let id = ctx.params.id;

    let bookDetails = await getBookById(id);
    render(temp(bookDetails, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        let {description, imageUrl, title, type} = data;
        
        if(!description || !imageUrl || !title || !type) {
            return alert('All fields are required!');
        }
        
        await put('/data/books/' + id, {title, description, imageUrl, type});

        page.redirect('/data/books/' + id);
    }
}