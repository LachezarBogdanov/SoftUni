function generateReport() {
    const  allth = document.querySelectorAll('input[type="checkbox"]');

    for (let th of allth) {
        if(th.checked) {
            console.log(th);
        }
    }
}