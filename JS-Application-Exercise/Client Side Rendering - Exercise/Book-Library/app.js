import { html, render } from "./node_modules/lit-html/lit-html.js";

let urlAllBooks = 'http://localhost:3030/jsonstore/collections/books';

let root = document.querySelector('body');
const rootTable = document.getElementById('rootTable');
const rootForm = document.getElementById('rootForm');

let tableTemplate = (books) => html `
    <button id="loadBooks" @click=${onLoadAllBooks}>LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${books?.map(el => createBookTemp(el))}
        </tbody>
`

let createBookTemp = (book) => html `
    <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button @click=${() => onEdit(book)}>Edit</button>
                    <button @click=${() => onDelete(book)}>Delete</button>
                </td>
            </tr>
`

let templateForCreate = () => html`
    <form id="add-form" @submit=${onSubmit}>
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
`

let templateForEditForm = (id, title, author) => html `
    <form id="edit-form" @submit=${(e) => onSave(e, id)}>
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value=${title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value=${author}>
        <input type="submit" value="Save">
    </form>
`

render(tableTemplate(), rootTable);
render(templateForCreate(), rootForm);

async function onLoadAllBooks() {

    let response = await fetch(urlAllBooks);
    let data = await response.json();

    const books = Object.entries(data).forEach(([id, obj]) => {
        if(!obj.hasOwnProperty('_id')) {
            return obj._id = id;
        }
    })
    render(tableTemplate(Object.values(data)), rootTable);
}

async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let {title, author} = Object.fromEntries(formData);

    if(!title || !author) {
        return;
    }

    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({title, author})
    }

    await fetch(urlAllBooks, option);
    e.target.reset();
    onLoadAllBooks();
}

async function onEdit(book) {
    render(templateForEditForm(book._id, book.title, book.author), rootForm);
}

async function onSave(e, id) {
    
    e.preventDefault();
    let formData = new FormData(e.target);

    let title = formData.get('title')
    let author = formData.get('author');
    
    let option = {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({title, author})
    };

    await fetch(`${urlAllBooks}/${id}`, option);
    render(templateForCreate(), rootForm);
    onLoadAllBooks();
}
async function onDelete(book) {
    
    let id = book._id;
    let title = book.title;
    let author = book.author;

    let option = {
        method: 'DELETE',
        body: JSON.stringify({ title, author })
    }

    await fetch(`${urlAllBooks}/${id}`, option);
    onLoadAllBooks();
}
