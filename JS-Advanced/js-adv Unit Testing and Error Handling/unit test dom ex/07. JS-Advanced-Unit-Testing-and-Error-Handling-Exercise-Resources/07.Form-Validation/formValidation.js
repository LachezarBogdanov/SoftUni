function validate() {
    const userNameInp = document.getElementById('username');
    const userEmail = document.getElementById('email');
    const userPass = document.getElementById('password');
    const userConfirmPass = document.getElementById('confirm-password');

    const divToShow = document.getElementById('valid');

    const form = document.getElementById('registerForm');
    const checkCompany = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    
    checkCompany.addEventListener('change', () => {
        if(checkCompany.checked) {
            companyInfo.style.display = 'block'; 
        } else {
            companyInfo.style.display = 'none';
        }
    })
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        
        if(checkCompany.checked) {
            let num = Number(companyNumber.value);
    
            if(num >= 1000 && num <= 9999) {
                companyNumber.style.borderColor = ''
            } else {
                companyNumber.style.borderColor = 'red';
                isValid = false;
            }
        }
        //validate username
        const patternForUsername = /^[A-Za-z0-9]{3,20}$/g;
        if(!patternForUsername.test(userNameInp.value)) {
            userNameInp.style.borderColor = 'red';
            isValid = false;
        } else {
            userNameInp.style.borderColor = '';
        }
        
        //validate email
        const patternForEmail = /^[^@.]+@[^@]*\.[^@]*$/;
        if(!patternForEmail.test(userEmail.value)) {
            userEmail.style.borderColor = 'red';
            isValid = false;
        } else {
            userEmail.style.borderColor = '';
        }
        
        //validate passwords
        const patternForPass = /^\w{5,15}$/;
        if(!patternForPass.test(userPass.value)) {

            if(!patternForPass.test(userConfirmPass.value)) {
                userPass.style.borderColor = 'red';
                userConfirmPass.style.borderColor = 'red';
                isValid = false;
            }

            let firstPass = userPass.value;
            let confirmPass = userConfirmPass.value;

            if(firstPass !== confirmPass) {
                userPass.style.borderColor = 'red';
                userConfirmPass.style.borderColor = 'red';
                isValid = false;
            }
        } else {
            let firstPass = userPass.value;
            let confirmPass = userConfirmPass.value;

            if(firstPass !== confirmPass) {
                userPass.style.borderColor = 'red';
                userConfirmPass.style.borderColor = 'red';
                isValid = false;
            } else {
                userPass.style.borderColor = '';
                userConfirmPass.style.borderColor = '';
            }
        }

        

        if(isValid) {
            divToShow.style.display = 'block';
        } else {
            divToShow.style.display = 'none';
        }
    })

}

