function lockedProfile() {
    const [prsOneBtn, prsTwoBtn, prsThreeBtn] = document.querySelectorAll('button');
    const profiles = document.querySelectorAll('#main .profile');
    
    prsOneBtn.addEventListener('click', (event) => {
        const curDiv = event.currentTarget.parentElement;
        const [lockRadio, unlockRadio] = curDiv.querySelectorAll('input[type="radio"]');

        const hidenElements = document.querySelector('#user1HiddenFields');
        
        if(unlockRadio.checked) {
            if(hidenElements.style.display === 'none' || hidenElements.style.display === '') {
                hidenElements.style.display = 'block';
                prsOneBtn.textContent = 'Hide it';

            } else {
                hidenElements.style.display = 'none';
                prsOneBtn.textContent = 'Show more';
            }
        }
    })

    prsTwoBtn.addEventListener('click', (event) => {
        const curDiv = event.currentTarget.parentElement;
        const [lockRadio, unlockRadio] = curDiv.querySelectorAll('input[type="radio"]');

        const hidenElements = document.querySelector('#user2HiddenFields');
        
        if(unlockRadio.checked) {
            if(hidenElements.style.display === 'none' || hidenElements.style.display === '') {
                hidenElements.style.display = 'block';
                prsTwoBtn.textContent = 'Hide it';

            } else {
                hidenElements.style.display = 'none';
                prsTwoBtn.textContent = 'Show more';
            }
        }
    })

    prsThreeBtn.addEventListener('click', (event) => {
        const curDiv = event.currentTarget.parentElement;
        const [lockRadio, unlockRadio] = curDiv.querySelectorAll('input[type="radio"]');

        const hidenElements = document.querySelector('#user3HiddenFields');
        
        if(unlockRadio.checked) {
            if(hidenElements.style.display === 'none' || hidenElements.style.display === '') {
                hidenElements.style.display = 'block';
                prsThreeBtn.textContent = 'Hide it';

            } else {
                hidenElements.style.display = 'none';
                prsThreeBtn.textContent = 'Show more';
            }
        }
    })
}