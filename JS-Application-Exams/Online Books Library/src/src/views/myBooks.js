import { get } from "../data/api.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";
import { myBookTemp } from "./partials/myBookTemp.js";


const temp = (myBooks) => html`
    <!-- My Books Page ( Only for logged-in users ) -->
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${myBooks.length ? myBooks.map(book => myBookTemp(book)) : html`<p class="no-books">No books in database!</p>`}
    </ul>

    <!-- Display paragraph: If the user doesn't have his own books  -->
</section>
`

export async function myBooks() {

    let userData = await getUserData();

    let id = userData._id;

    let myBooks = await get(`/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
    debugger
    render(temp(myBooks));
}