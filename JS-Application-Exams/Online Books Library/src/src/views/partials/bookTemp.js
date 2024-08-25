import { html } from "../../lib.js";


export const bookTemp = (book) => html`
    <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <a class="button" href="/data/books/${book._id}">Details</a>
        </li>
`