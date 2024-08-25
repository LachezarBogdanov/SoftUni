import { onSubmit } from "./views/createPosts.js";
import { onHome, onLoad } from "./views/homePg.js";

const urls = {
    urlForPosts: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    urlForComments: 'http://localhost:3030/jsonstore/collections/myboard/comments'
}

const aHome = document.querySelector('nav a');

aHome.addEventListener('click', onLoad);

const formRef = document.querySelector('div.new-topic-border form');
onHome();
formRef.addEventListener('submit', onSubmit);