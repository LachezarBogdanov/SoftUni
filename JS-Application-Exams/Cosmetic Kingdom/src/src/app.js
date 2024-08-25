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
import { addView } from "./views/addView.js";
import { deleteProduct } from "./views/deleteView.js";

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/dashboard', dashboardView);
page('/data/products/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteProduct);
page('/addProduct', addView);

page.start();

async function onLogout(){
    let userData = await getUserData();

    if(userData) {
        await logout();

        updateNav();
        page.redirect('/dashboard');
    }
}