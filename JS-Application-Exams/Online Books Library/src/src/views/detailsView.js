import { html, render, page } from "../lib.js";
import { getBookById, getUserData } from "../util.js";


const temp = (hasUser, isOwner, bookDetails) => html`
    
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${bookDetails.title}</h3>
        <p class="type">Type: ${bookDetails.type}</p>
        <p class="img"><img src=${bookDetails.imageUrl}></p>
        <div class="actions">
            ${isOwner ? html`
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                <a class="button" href="/edit/${bookDetails._id}">Edit</a>
                <a class="button" href="/delete/${bookDetails._id}">Delete</a>
            ` : html`
            ${hasUser ? html`
            <a class="button" href="#">Like</a>
            ` : ''}
            `}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${bookDetails.description}</p>
    </div>
</section>
`

export async function detailsView(ctx) {

    let id = ctx.params.id;
    let userData = await getUserData();

    let bookDetails = await getBookById(id);

    let userId = userData?._id;
    let ownerId = bookDetails._ownerId;

    let isOwner = userId == ownerId;
    
    render(temp(userData, isOwner, bookDetails));
}