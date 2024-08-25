import { userService } from "./src/api/userService.js";
import { userUtils } from "./src/utils/userUtils.js";
import { showCreateView } from "./src/view/createView.js";
import { showDashboardView } from "./src/view/dashboardView.js";
import { showDetailsView } from "./src/view/detailsView.js";
import { showEditView } from "./src/view/editView.js";
import { showHomeView } from "./src/view/homeView.js";
import { showLoginView } from "./src/view/loginView.js";
import { showRegisterView } from "./src/view/registerView.js";


Array.from(document.querySelectorAll('div[data-section]')).forEach(el => el.remove());

const main = document.getElementsByTagName('main');
const nav = document.querySelector('nav');

nav.addEventListener('click', onNavigate);

const routes = {
    '/': showHomeView,
    '/login': showLoginView,
    '/register': showRegisterView,
    '/dashboard': showDashboardView,
    '/details': showDetailsView,
    '/create': showCreateView,
    '/edit': showEditView,
    '/logout': onLogout
}

async function onLogout() {
    debugger
    await userService.logout();
    updateNav();
    goTo('/');
}

function onNavigate(e) {
     
    e.preventDefault();

    let target = e.target;

    if(target.tagName !== 'A') {
        target = e.target.parentElement;
    }

    if(!target.href) {
        return;
    }

    const curUrl = new URL(target.href);
    const viewName = curUrl.pathname;
    goTo(viewName);
}

    function updateNav() {
        const hasUser = userUtils.getUser();
        const userA = document.querySelectorAll("a[data-user]");
        const guestA = document.querySelectorAll("a[data-guest]");

        if(hasUser) {
            userA.forEach(a => a.style.display = 'block');
            guestA.forEach(a => a.style.display = 'none')
        } else {
            userA.forEach(a => a.style.display = 'none');
            guestA.forEach(a => a.style.display = 'block');
        }
    }

const ctx = {
    goTo,
    updateNav
}
function goTo(name, ...params) {
    
    const handler = routes[name];
    handler(ctx, params);
}

goTo('/');
updateNav();
