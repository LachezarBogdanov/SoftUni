import { createComment, saveComment } from "./comments.js";


const urls = {
    urlForPosts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    urlForComments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
}

const topicCont = document.querySelector('div.topic-container');
const topicBorder = document.querySelector('div.new-topic-border');
const themeContent = document.querySelector('div.theme-content');
const main = document.querySelector('div main');
let h2El = document.querySelector('div.theme-name h2');
let commentDivRef = document.querySelector('div.comment');
const commentForm = document.querySelector('div.answer form');

commentForm.addEventListener('submit', onComment);

async function onComment(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let postText = formData.get('postText');
    let userName = formData.get('username');
    
    saveComment({content: postText, username: userName, date: new Date()});
    createComment({content: postText, username: userName, date: new Date()});
    e.target.reset();
}

export function onDetails(e) {
    e.preventDefault();

    main.replaceChildren(themeContent);
    let curDiv = e.target.parentElement.parentElement;
    let h2Content = curDiv.querySelector('h2').textContent;

    
    h2El.textContent = h2Content;
    
    createCommentDetais(curDiv);
}

async function createCommentDetais(div) {

    let id = div.querySelector('a').dataset.id;
    
    let response = await fetch(urls.urlForPosts + '/' + id);
    let data = await response.json();

    showDetails(data);
}

function showDetails(data) {
    let id = data._id;
    commentDivRef.innerHTML = '';
    let divContainer = document.createElement('div');
    divContainer.classList.add('header');

    divContainer.innerHTML = `
    <img src="./static/profile.png" alt="avatar">
        <p><span>${data.username}</span> posted on <time>${data.date}</time></p>

        <p class="post-content">${data.content}</p>
    `

    commentDivRef.appendChild(divContainer);
    showComments(data, id);
}

export async function showComments(data, id) {
    debugger
    let response = await fetch(urls.urlForComments);
    let comm = await response.json();
    
}