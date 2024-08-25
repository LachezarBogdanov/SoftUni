import { page } from "./lib.js";
import * as api from './data/api.js';
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { getUserData, updateNav } from "./util.js";
import { logout } from "./data/user.js";
import { charactersView } from "./views/charactersView.js";
import { onDetailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { onDelete } from "./views/deleteView.js";
import { onCreate } from "./views/createView.js";


page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/characters', charactersView);
page('/data/characters/:id', onDetailsView);
page('/edit/:id', editView);
page('/delete/:id', onDelete);
page('/addCharacter', onCreate);

page.start();

async function onLogout() {
    let userData = getUserData();

    if(userData) {
        page.redirect('/');
        await logout();
        updateNav();
    }
}