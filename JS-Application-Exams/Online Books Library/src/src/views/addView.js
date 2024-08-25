import { post } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const temp = (onAdd) => html`
    <!-- Create Page ( Only for logged-in users ) -->
<section id="create-page" class="create">
    <form id="create-form" action="" method="" @submit=${onAdd}>
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>
`

export async function addView() {
    render(temp(createSubmitHandler(onAdd)));

    async function onAdd(data) {
        let {description, imageUrl, title, type} = data;
        
        if(!description || !imageUrl || !title || !type) {
            return alert('All fields are required!');
        }

        await post('/data/books', {title, description, imageUrl, type});

        page.redirect('/dashboard');
    }
}