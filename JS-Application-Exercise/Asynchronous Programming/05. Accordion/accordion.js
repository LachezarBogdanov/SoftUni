document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.getElementById('main');

    // Fetch article titles
    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                const articleElement = createArticleElement(article);
                mainSection.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});

function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'accordion';
    articleDiv.innerHTML = `
        <div class="head">
            <span>${article.title}</span>
            <button class="button" id="${article._id}" onclick="toggleContent('${article._id}', this)">More</button>
        </div>
        <div class="extra" id="extra-${article._id}" style="display: none;">
            <p id="content-${article._id}"></p>
        </div>
    `;
    return articleDiv;
}

function toggleContent(id, button) {
    const extraDiv = document.getElementById(`extra-${id}`);
    const contentP = document.getElementById(`content-${id}`);

    if (extraDiv.style.display === 'none') {
        // Fetch article content
        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
            .then(response => response.json())
            .then(article => {
                contentP.textContent = article.content;
                extraDiv.style.display = 'block';
                button.textContent = 'Less';
            })
            .catch(error => console.error('Error fetching article content:', error));
    } else {
        extraDiv.style.display = 'none';
        button.textContent = 'More';
    }
}