import { page } from "./lib.js";
import * as api from './data/api.js';
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { getUserData, updateNav } from "./util.js";
import { logout } from "./data/user.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { deleteHandler } from "./views/deleteHandler.js";
import { addView } from "./views/addView.js";

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/dashboard', dashboardView);
page('/data/cyberpunk/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteHandler);
page('/sell', addView);

updateNav();
page.start();

async function logoutHandler() {
    let userData = await getUserData();

    if(userData) {
        await logout();

        updateNav();
        page.redirect('/');
    }
}