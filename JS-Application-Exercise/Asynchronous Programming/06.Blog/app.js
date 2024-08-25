function attachEvents() {
    let urlForAllPosts = 'http://localhost:3030/jsonstore/blog/posts';
    let urlForComments = 'http://localhost:3030/jsonstore/blog/comments/';
    const btnViewPosts = document.getElementById('btnViewPost');
    const btnAllPosts = document.getElementById('btnLoadPosts');
    const selectPosts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const pForText = document.getElementById('post-body');
    const ulForComments = document.getElementById('post-comments');


    btnAllPosts.addEventListener('click', allPosts);
    btnViewPosts.addEventListener('click', viewPosts);

    async function allPosts() {
        let allPosts = await fetch(urlForAllPosts);
        let response = await allPosts.json();
        selectPosts.innerHTML = '';
        
        Object.entries(response).forEach(el => {
            let [key, value] = el;
            
            let option = document.createElement('option');
            option.value = value.id;
            option.textContent = value.title;
            selectPosts.appendChild(option);
        })
    }

    async function viewPosts() {
        let curId = selectPosts.value;
        let coment = await fetch(`${urlForAllPosts}/${curId}`);
        let result = await coment.json();
        let responseAllComent = await fetch(urlForComments);
        let resultForComents = await responseAllComent.json();

        let filteredComents = Object.values(resultForComents).filter(el => el.postId === curId);
        postTitle.textContent = result.title;
        pForText.textContent = result.body;

        
        ulForComments.innerHTML = '';
        Object.values(filteredComents).forEach(el => {
            let liEl = document.createElement('li');
            liEl.textContent = el.text;
            liEl.id = el.id;
            ulForComments.appendChild(liEl);
        })
    }

}

attachEvents();