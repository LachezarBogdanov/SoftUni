function validate() {
    let emailText = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    emailText.addEventListener('change', (event) => {
        let input = event.currentTarget.value;
        
        if(pattern.test(input)) {
            event.currentTarget.classList.remove('error')
        } else {
            event.currentTarget.classList.add('error')
        }
    })
}