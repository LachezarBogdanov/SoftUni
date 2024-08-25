function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    let urlForAllContacts = 'http://localhost:3030/jsonstore/phonebook';
    let urlForDelete = 'http://localhost:3030/jsonstore/phonebook/';
    let urlForPost = 'http://localhost:3030/jsonstore/phonebook';
    let ulForLoadContacts = document.getElementById('phonebook');
    const personText = document.getElementById('person');
    const phoneText = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    async function onCreate(e) {
        let person = personText.value;
        let phone = phoneText.value;

        let option = {
            person,
            phone
        };

        await fetch(urlForPost, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(option)
        });

        personText.value = '';
        phoneText.value = '';
        ulForLoadContacts.innerHTML = '';
        onLoad();
    }

    async function onLoad(e) {
        let response = await fetch(urlForAllContacts);
        let data = await response.json();
    
        Object.entries(data).forEach(([key, entry]) => {
            const li = document.createElement('li');
            li.textContent = `${entry.person}: ${entry.phone} `;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => onDelete(li, key));

            li.appendChild(deleteButton);
            ulForLoadContacts.appendChild(li);
        });
    }

    async function onDelete(key, el) {
        let url = `${urlForDelete}${el}`;
         await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        key.remove();
    }
}

attachEvents();