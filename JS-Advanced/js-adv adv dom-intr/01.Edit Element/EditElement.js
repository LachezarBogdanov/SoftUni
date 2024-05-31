function editElement(el, str, replace) {
    while(el.textContent.includes(str)) {
        el.textContent = el.textContent.replace(str, replace);
    }
}