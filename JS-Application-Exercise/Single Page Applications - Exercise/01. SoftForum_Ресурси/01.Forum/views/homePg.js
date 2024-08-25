import { showPost } from "./createPosts.js";


const urls = {
    urlForPosts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    urlForComments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
}

const topicCont = document.querySelector('div.topic-container');
const topicBorder = document.querySelector('div.new-topic-border');
const themeContent = document.querySelector('div.theme-content');
const main = document.querySelector('div main');




export async function onHome() {
    themeContent.remove();
    
    main.appendChild(topicBorder);
    main.appendChild(topicCont);

    let response = await fetch(urls.urlForPosts);
    let data = await response.json();

    topicCont.innerHTML = '';
    Object.values(data).forEach(el => {
        let id = el._id;
        
        showPost(el, id);
    })
}

export async function onLoad(e) {
    e.preventDefault();
    themeContent.remove();
    
    main.appendChild(topicBorder);
    main.appendChild(topicCont);

    let response = await fetch(urls.urlForPosts);
    let data = await response.json();

    topicCont.innerHTML = '';
    Object.values(data).forEach(el => {
        let id = el._id;
        
        showPost(el, id);
    })
}