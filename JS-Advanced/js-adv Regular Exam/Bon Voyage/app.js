window.addEventListener('load', solve);

function solve() {
    const firstNameRef = document.getElementById('first-name');
    const lastNameRef = document.getElementById('last-name');
    const fromDateRef = document.getElementById('from-date');
    const toDateRef = document.getElementById('to-date');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const status = document.getElementById('status');

    status.addEventListener('click', (e) => {
        window.location.reload();
    })

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let inputs = [
            firstNameRef,
            lastNameRef,
            fromDateRef,
            toDateRef
        ]

        if(inputs.some(el => el.value === '')) {
            return;
        }

        if(fromDateRef.value > toDateRef.value) {
            return;
        }

        let liItem = createLiForInfo(firstNameRef.value, lastNameRef.value, fromDateRef.value, toDateRef.value);
        infoList.appendChild(liItem);

        inputs.forEach(el => el.value = '');
        nextBtn.disabled = true;
    })

    function createLiForInfo(firstName, lastName, fromDate, toDate) {
        let li = document.createElement('li');
        li.classList.add('vacation-content');

        let article = document.createElement('aricle');

        let h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstName} ${lastName}`;

        let pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${fromDate}`;

        let pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${toDate}`;

        let btnEdit = document.createElement('button');
        btnEdit.classList.add('edit-btn');
        btnEdit.textContent = 'Edit';

        btnEdit.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();

            firstNameRef.value = firstName;
            lastNameRef.value = lastName;
            fromDateRef.value = fromDate;
            toDateRef.value = toDate;

            nextBtn.disabled = false;
        })

        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';

        continueBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();

            let liItem = liElementForConfirm(firstName, lastName, fromDate, toDate);
            confirmList.appendChild(liItem);
        })

        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);

        li.appendChild(article);
        li.appendChild(btnEdit)
        li.appendChild(continueBtn);

        return li;
    }

    function liElementForConfirm(firstName, lastName, fromDate, toDate) {
        let li = document.createElement('li');
        li.classList.add('vacation-content');

        let article = document.createElement('aricle');

        let h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstName} ${lastName}`;

        let pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${fromDate}`;

        let pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${toDate}`;

        let confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';

        confirmBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();

            status.classList.add('vacation-confirmed');
            status.textContent = 'Vacation Requested';
            nextBtn.disabled = false;
        })

        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';

        cancelBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove();

            status.classList.add('vacation-cancelled');
            status.textContent = 'Cancelled Vacation';
            nextBtn.disabled = false;
        })

        article.appendChild(h3Name);
        article.appendChild(pFromDate)
        article.appendChild(pToDate);

        li.appendChild(article);
        li.appendChild(confirmBtn)
        li.appendChild(cancelBtn);

        return li;
    }
    }


    
    
