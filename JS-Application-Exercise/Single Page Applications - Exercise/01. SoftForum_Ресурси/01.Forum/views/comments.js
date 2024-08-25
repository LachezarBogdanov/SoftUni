
const urls = {
    urlForPosts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    urlForComments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
}

const commentDiv = document.querySelector('div.comment');

export async function saveComment(comment) {
    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(comment)
    };

    await fetch(urls.urlForComments, option);
}

export function createComment(comment) {
    debugger
    let divContainer = document.createElement('div');
    divContainer.id = 'user-comment';

    divContainer.innerHTML = `
    <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                <div class="post-content">
                    <p>${comment.content}</p>
                </div>
            </div>
        </div>
    `

    commentDiv.appendChild(divContainer);
}