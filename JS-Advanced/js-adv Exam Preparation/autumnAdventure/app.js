window.addEventListener('load', solve);

function solve() {
    const timeRef = document.getElementById('time');
    const dateRef = document.getElementById('date');
    const placeRef = document.getElementById('place');
    const eventRef = document.getElementById('event-name');
    const emailRef = document.getElementById('email');
    const addBtnRef = document.getElementById('add-btn');
    const checkListRef = document.getElementById('check-list');
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list');
    const clearBtn = document.getElementById('clear');

    clearBtn.addEventListener('click', (e) => {
        let liToRemove = document.querySelector('.event-content');
        liToRemove.remove();
    })

    addBtnRef.addEventListener('click', (e) => {

        let refs = [
            timeRef,
            dateRef,
            placeRef,
            eventRef,
            emailRef
        ]

        if(refs.some(el => el.value === '')) {
            return;
        }

        let liElement = createLi(timeRef.value, dateRef.value, placeRef.value, eventRef.value, emailRef.value);
        checkListRef.appendChild(liElement);

        refs.forEach(el => el.value = '');
        addBtnRef.disabled = true;
    })

    function createLi(time, date, place, event, email) {
        let liEl = document.createElement('li');
        liEl.classList.add('event-content');

        let article = document.createElement('article');

        let pTimeAndDate = document.createElement('p');
        pTimeAndDate.textContent = `Begins: ${date} at: ${time}`;

        let pPlace = document.createElement('p');
        pPlace.textContent = `In: ${place}`;

        let pEvent = document.createElement('p');
        pEvent.textContent = `Event: ${event}`;

        let pContact = document.createElement('p');
        pContact.textContent = `Contact: ${email}`;

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit'

        editBtn.addEventListener('click', (e) => {
            timeRef.value = time;
            dateRef.value = date;
            placeRef.value = place;
            eventRef.value = event;
            emailRef.value = email;

            e.currentTarget.parentElement.parentElement.remove();
            addBtnRef.disabled = false;
        })

        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        continueBtn.addEventListener('click', (e) => {

            e.currentTarget.parentElement.parentElement.remove();

            let liEl = document.createElement('li');
        liEl.classList.add('event-content');

        let article = document.createElement('article');

        let pTimeAndDate = document.createElement('p');
        pTimeAndDate.textContent = `Begins: ${date} at: ${time}`;

        let pPlace = document.createElement('p');
        pPlace.textContent = `In: ${place}`;

        let pEvent = document.createElement('p');
        pEvent.textContent = `Event: ${event}`;

        let pContact = document.createElement('p');
        pContact.textContent = `Contact: ${email}`;

        let btnFinish = document.createElement('button');
        btnFinish.classList.add('finished-btn');
        btnFinish.textContent = 'Move to Finished';

        
        article.appendChild(pTimeAndDate);
        article.appendChild(pPlace);
        article.appendChild(pEvent);
        article.appendChild(pContact);
        liEl.appendChild(btnFinish);
        liEl.appendChild(article);
        upcomingList.appendChild(liEl);
        addBtnRef.disabled = false;

        btnFinish.addEventListener('click', (e) => {
            finishedList.appendChild(liEl);
            e.currentTarget.remove();
        })
        })

        article.appendChild(pTimeAndDate);
        article.appendChild(pPlace);
        article.appendChild(pEvent);
        article.appendChild(pContact);
        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);
        liEl.appendChild(article);


        return liEl;
    }
}


    
    
