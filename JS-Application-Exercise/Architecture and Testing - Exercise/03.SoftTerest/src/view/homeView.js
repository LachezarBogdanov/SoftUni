
const main = document.querySelector('main');
const homeSection = document.querySelector("div[data-section='home']");
const aRef = document.querySelector('a[data-tag]');
aRef.addEventListener('click', onNavigate);

let context = null;
export function showHomeView(ctx) {
    context = ctx;
    main.replaceChildren(homeSection);

}

function onNavigate(e) {
    e.preventDefault();
    const href = e.target.href;
    const pathName = new URL(href).pathname;
    context.goTo(pathName);
}