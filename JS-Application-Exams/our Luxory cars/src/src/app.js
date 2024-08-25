import { page } from "./lib.js";
import * as api from './data/api.js';
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logout } from "./data/user.js";
import { updateNav } from "./util.js";
import { dashboardView } from "./views/dashboardView.js";
import { onMoreInfo } from "./views/moreInfoView.js";
import { editView } from "./views/editView.js";
import { onDelete } from "./views/onDelete.js";
import { addCarView } from "./views/addCarView.js";
import { searchView } from "./views/searchView.js";

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/dashboard', dashboardView);
page('/data/cars/:id', onMoreInfo);
page('/edit/:id', editView);
page('/delete/:id', onDelete);
page('/addCar', addCarView);
page('/search', searchView);

page.start();
updateNav();

async function onLogout() {
    await logout();

    updateNav();
    page.redirect('/');
}