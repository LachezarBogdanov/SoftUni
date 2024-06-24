function getArticleGenerator(articles) {
    
    return function showNext() {
        let initial = articles;
        let curShift = initial.shift();
        if(curShift) {
            let div = document.querySelector('#content');
            let article = document.createElement('article');
            article.append(curShift);
            div.append(article);
        }
    }

}
