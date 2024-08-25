import { page } from "./lib.js";
import * as api from './data/api.js';
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { getUserData } from "./util.js";
import { logout } from "./data/user.js";
import { dashboardView } from "./views/dashboardView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { onDelete } from "./views/deleteView.js";
import { addFact } from "./views/addView.js";

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/dashboard', dashboardView);
page('/data/facts/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', onDelete);
page('/addFact', addFact);

page.start();

async function onLogout() {
    let userData = await getUserData();

    if(userData) {
        await logout();

        page.redirect('/');
    }
}