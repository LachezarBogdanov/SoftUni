function focused() {
    
    let divs = document.querySelectorAll('div div');
    
    for (let div of divs) {
        let childEl = div.querySelector('input');
        
        childEl.addEventListener('focus', (event) => {
            let parent = event.currentTarget.parentElement;

                parent.classList.add('focused')
        })

        childEl.addEventListener('blur', (event) => {
            let parent = event.currentTarget.parentElement;

            parent.classList.remove('focused')
        })
    }
}