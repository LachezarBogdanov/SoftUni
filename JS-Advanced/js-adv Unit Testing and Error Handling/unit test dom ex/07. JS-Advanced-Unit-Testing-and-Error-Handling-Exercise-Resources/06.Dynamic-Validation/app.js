function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', () => {
        let value = emailInput.value;
        if(pattern.test(value)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    })
}