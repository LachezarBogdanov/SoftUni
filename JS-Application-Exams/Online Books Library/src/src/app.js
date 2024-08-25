import { page } from "./lib.js";
import * as api from './data/api.js';
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { getUserData, updateNav } from "./util.js";
import { logout } from "./data/user.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { deleteBook } from "./views/deleteBook.js";
import { addView } from "./views/addView.js";
import { myBooks } from "./views/myBooks.js";

page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/dashboard', dashboardView);
page('/data/books/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteBook);
page('/addBook', addView);
page('/myBooks', myBooks);

updateNav();
page.start();

async function logoutHandler() {
    let userData = await getUserData();

    if(userData) {
        await logout();
        updateNav();
        page.redirect('/dashboard');
    }
}