function solve() {
    
    document.querySelector('form').addEventListener('submit', onSubmit);
    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');
    let [form, openSect, inProgress, complete] = Array.from(document.querySelectorAll('section'));

    function onSubmit(event) {
        event.preventDefault();
        let task = taskRef.value;
        let description = descriptionRef.value;
        let date = dateRef.value;

        if(!task || !description || !date) {
            return;
        }

        let article = createArticle(task, description, date);
        openSect.children[1].append(article);
    }

    function createArticle(curTask, curDesc, curDate) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = curTask;
        let decr = document.createElement('p');
        decr.textContent = `Description: ${curDesc}`;
        let date = document.createElement('p');
        date.textContent = `Due Date: ${curDate}`;

        let div = document.createElement('div');
        div.classList.add('flex');

        let startBtn = createBtn('green', 'Start');

        startBtn.addEventListener('click', start);

        let deleteBtn = createBtn('red', 'Delete');

        deleteBtn.addEventListener('click', del);

        div.append(startBtn);
        div.append(deleteBtn);
        article.append(h3);
        article.append(decr);
        article.append(date);
        article.append(div);

        return article;
    }

    function createBtn (classC, name){
        let btn = document.createElement('button');
        btn.classList.add(classC);
        btn.textContent = name;

        return btn;
    }

    function start(event) {
        let container = event.currentTarget.parentElement;
        let article = container.parentElement;
        
        container.innerHTML = '';
        inProgress.children[1].append(article);
        let deleteBtn = createBtn('red', 'Delete', del);
        deleteBtn.addEventListener('click', del);
        let finishBtn = createBtn('orange', 'Finish', finish);
        finishBtn.addEventListener('click', finish);
        container.append(deleteBtn);
        container.append(finishBtn);
    }

    function del (event){
        let articleToDel = event.currentTarget.parentElement.parentElement;
        let container = articleToDel.parentElement;
       container.removeChild(articleToDel);
     
    }

    function finish (event){
        let container = event.currentTarget.parentElement;
        let article = event.currentTarget.parentElement.parentElement;
        article.removeChild(container);
        complete.children[1].append(article);
    }
}