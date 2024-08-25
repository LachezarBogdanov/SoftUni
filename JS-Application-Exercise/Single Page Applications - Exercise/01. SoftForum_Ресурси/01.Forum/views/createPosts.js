import { onDetails } from "./commentView.js";
import { onHome } from "./homePg.js";

const urls = {
    urlForPosts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    urlForComments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
}

const topicCont = document.querySelector('div.topic-container');

export function onSubmit(e) {
    
    e.preventDefault();
    
    let formData = new FormData(e.target);

    let topicTitle = formData.get('topicName')
    let userName = formData.get('username')
    let postText = formData.get('postText');

    let curBtn = e.submitter.textContent;

    if(!topicTitle || !userName || !postText) {
        return;
    }

    if(curBtn === 'Post') {
        e.target.reset();


        savePost({title: topicTitle, username: userName, content: postText, date: new Date()});

        onHome();
    } else {
        e.target.reset();
    }
}


async function savePost(data) {

    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    };

    await fetch(urls.urlForPosts, option);
    
}

export function showPost(data, id) {
    
    let divContainer = document.createElement('div');
    divContainer.classList.add('topic-name-wrapper');

    divContainer.innerHTML = `
    <div class="topic-name">
            <a href="#" class="normal" data-id=${id}>
                <h2>${data.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${data.date}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${data.username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    `
    
    divContainer.querySelector('a').addEventListener('click', onDetails)
    topicCont.appendChild(divContainer);
}