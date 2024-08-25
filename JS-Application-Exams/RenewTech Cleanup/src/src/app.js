import { page } from "./lib.js";
import * as api from './data/api.js';
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { getUserData, updateNav } from "./util.js";
import { dashboardView } from "./views/dashboardView.js";
import { logout } from "./data/user.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { deleteView } from "./views/deleteView.js";
import { addView } from "./views/addView.js";

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/data/solutions/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);
page('/addSolution', addView);

updateNav();
page.start();

async function logoutView(){
    let userData = await getUserData();

    if(userData) {
        await logout();

        updateNav();
        page.redirect('/');
    }   
}