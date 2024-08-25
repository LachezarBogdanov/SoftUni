import { html, render, page } from "../lib.js";
import { getAllBooks } from "../util.js";
import { bookTemp } from "./partials/bookTemp.js";


const temp = (allBooks) => html`
    <!-- Dashboard Page ( for Guests and Users ) -->
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
        ${allBooks.length ? allBooks.map(book => bookTemp(book)) : html`<p class="no-books">No books in database!</p>`}
    </ul>
    <!-- Display paragraph: If there are no books in the database -->
</section>
`

export async function dashboardView() {

    let allBooks = await getAllBooks();
    render(temp(allBooks));
}