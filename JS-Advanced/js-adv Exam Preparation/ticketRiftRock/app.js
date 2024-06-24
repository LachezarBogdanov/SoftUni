window.addEventListener("load", solve);

function solve() {
    const numTicketsRef = document.getElementById('num-tickets');
    const seatingRef = document.getElementById('seating-preference');
    const nameRef = document.getElementById('full-name');
    const emailRef = document.getElementById('email');
    const phoneNumRef = document.getElementById('phone-number');
    const purchaseBtn = document.getElementById('purchase-btn');
    const ticketPreview = document.getElementById('ticket-preview');
    const ticketPurchase = document.getElementById('ticket-purchase');

    
    purchaseBtn.addEventListener('click', () => {
        if(!numTicketsRef.value || !seatingRef.value || !nameRef.value || !emailRef.value || !phoneNumRef.value) {
            debugger;
            return;
        }
        
        let liEl = createLi(numTicketsRef.value, seatingRef.value, nameRef.value, emailRef.value, phoneNumRef.value);
        ticketPreview.appendChild(liEl);

        numTicketsRef.value = '';
        seatingRef.value = '';
        nameRef.value = '';
        emailRef.value = '';
        phoneNumRef.value = '';
        purchaseBtn.disabled = 'true';
    });


    function createLi (numTickets, seatingPref, name, email, phoneNumber) {
        let li = document.createElement('li');
        li.classList.add('ticket-purchase');

        let article = document.createElement('article');
        let pCount = document.createElement('p');
        pCount.textContent = `Count: ${numTickets}`;

        let pPref = document.createElement('p');
        pPref.textContent = `Preference: ${seatingPref}`;

        let pName = document.createElement('p');
        pName.textContent = `To: ${name}`;

        let pEmail = document.createElement('p');
        pEmail.textContent = `Email: ${email}`;

        let pPhone = document.createElement('p');
        pPhone.textContent = `Phone Number: ${phoneNumber}`;

        let divForBtns = document.createElement('div');
        divForBtns.classList.add('btn-container');

        let editBtn = createBtnEditAndNext('Edit');

        editBtn.addEventListener('click', (e) => {
            numTicketsRef.value = numTickets;
            seatingRef.value = seatingPref;
            nameRef.value = name;
            emailRef.value = email;
            phoneNumRef.value = phoneNumber;

            e.currentTarget.parentElement.parentElement.remove();
            purchaseBtn.disabled = '';
        });

        let nextBtn = createBtnEditAndNext('Next');

        
        article.appendChild(pCount);
        article.appendChild(pPref);
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pPhone);
        
        divForBtns.appendChild(editBtn);
        divForBtns.appendChild(nextBtn);
        
        li.appendChild(article);
        li.appendChild(divForBtns);
        
        nextBtn.addEventListener('click', (e) => {
            e.currentTarget.parentElement.parentElement.remove();
            
            let li = document.createElement('li');
            li.classList.add('ticket-purchase');

            let article = document.createElement('article');
            let pCount = document.createElement('p');
            pCount.textContent = `Count: ${numTickets}`;
            
            let pPref = document.createElement('p');
            pPref.textContent = `Preference: ${seatingPref}`;
            
            let pName = document.createElement('p');
            pName.textContent = `To: ${name}`;
            
            let pEmail = document.createElement('p');
            pEmail.textContent = `Email: ${email}`;
            
            let pPhone = document.createElement('p');
            pPhone.textContent = `Phone Number: ${phoneNumber}`;
            
            let buyBtn = createBtn('Buy');

            buyBtn.addEventListener('click', (e) => {
                e.currentTarget.parentElement.parentElement.remove();

                let h2El = document.createElement('h2');
                h2El.textContent = "Thank you for your purchase!";
                
                let backBtn = document.createElement('button');
                backBtn.classList.add('back-btn');
                backBtn.textContent = 'Back';

                backBtn.addEventListener('click', (e) => {
                    let div = e.currentTarget.parentElement;

                    let h2ToRemove = div.querySelector('h2');
                    let btnToRemove = div.querySelector('button');
                    
                    h2ToRemove.remove();
                    btnToRemove.remove();

                    purchaseBtn.disabled = '';
                })

                let divBottomCont = document.querySelector('.bottom-content');
                divBottomCont.appendChild(h2El);
                divBottomCont.appendChild(backBtn);
            })

            article.appendChild(pCount);
            article.appendChild(pPref);
            article.appendChild(pName);
            article.appendChild(pEmail);
            article.appendChild(pPhone);
            article.appendChild(buyBtn);

            li.appendChild(article);

            ticketPurchase.appendChild(li);
        })
        return li;
    }

    function createBtnEditAndNext(text) {
        let btn = document.createElement('button');
        if(text === 'Edit') {
            btn.classList.add('edit-btn');
        } else {
            btn.classList.add('next-btn');
        }

        btn.textContent = text;

        return btn;
    }

    function createBtn(text) {
        let btn = document.createElement('button');
        btn.classList.add('buy-btn');
        btn.textContent = text;

        return btn;
    }
}
