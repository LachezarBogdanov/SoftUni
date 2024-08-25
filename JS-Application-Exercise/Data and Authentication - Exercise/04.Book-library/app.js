document.getElementById('loadBooks').addEventListener('click', onLoadAll);
let urlForAll = 'http://localhost:3030/jsonstore/collections/books';
let tBody = document.querySelector('tbody');
let titleArea = document.querySelector('input[name="title"]');
let authorArea = document.querySelector('input[name="author"]');
let formRef = document.querySelector('form');
let h3FromForm = document.querySelector('form h3');
let submitButton = formRef.querySelector('button');

formRef.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    
    if (submitButton.textContent === 'Save') {
        await onSave(submitButton.dataset.id);
        submitButton.textContent = 'Submit';
        submitButton.removeAttribute('data-id');
        return;
    }

    h3FromForm.textContent = 'FORM';

    let title = titleArea.value;
    let author = authorArea.value;

    if (!title || !author) {
        return;
    }

    let data = {
        author,
        title
    }

    await fetch(urlForAll, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    titleArea.value = '';
    authorArea.value = '';
}

async function onLoadAll() {
    tBody.innerHTML = '';
    let response = await fetch(urlForAll);
    let data = await response.json();

    Object.entries(data).forEach(p => {
        let [id, el] = p;
        let trData = createTrData(el, id);
        tBody.appendChild(trData);
    });
}

function createTrData(data, id) {
    let tr = document.createElement('tr');

    let firstTd = document.createElement('td');
    firstTd.textContent = data.title;

    let secondTd = document.createElement('td');
    secondTd.textContent = data.author;

    let thirdTd = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', function(event) {
        onEdit(event, id);
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function(event) {
        onDelete(event, id);
    });

    thirdTd.appendChild(editBtn);
    thirdTd.appendChild(deleteBtn);

    tr.appendChild(firstTd);
    tr.appendChild(secondTd);
    tr.appendChild(thirdTd);

    return tr;
}

function onEdit(e, id) {
    let curTr = e.target.parentElement.parentElement;
    let titleRef = curTr.querySelector('td:nth-of-type(1)');
    let authorRef = curTr.querySelector('td:nth-of-type(2)');

    h3FromForm.textContent = 'Edit FORM';
    titleArea.value = titleRef.textContent;
    authorArea.value = authorRef.textContent;

    submitButton.textContent = 'Save';
    submitButton.dataset.id = id;
}

async function onSave(id) {
    let urlForPost = `${urlForAll}/${id}`;
    let title = titleArea.value;
    let author = authorArea.value;

    let option = {
        author,
        title
    }

    await fetch(urlForPost, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    });

    // Reset form and button state after saving
    titleArea.value = '';
    authorArea.value = '';
    h3FromForm.textContent = 'FORM';
}

async function onDelete(event, id) {
    let urlForDel = `${urlForAll}/${id}`;

    await fetch(urlForDel, {
        method: 'DELETE'
    })

    onLoadAll();
}