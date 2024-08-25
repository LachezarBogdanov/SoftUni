function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/messenger';
    onRefresh();
    const refreshBtn = document.getElementById('refresh');
    const textAreaRef = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const nameRef = document.querySelector('input[name="author"]');
    const messagesRef = document.querySelector('input[name="content"]');

    refreshBtn.addEventListener('click', onRefresh);
    sendBtn.addEventListener('click', onSubmit);

    async function onRefresh(e) {
        
        let response = await fetch(baseUrl);
        let data = await response.json();
        let buff = '';
      
        Object.values(data).forEach(el => {
            buff += `${el.author}: ${el.content}\n`
        });

        textAreaRef.textContent = buff.trim();
    }

    async function onSubmit() {
        const author = nameRef.value;
        const content = messagesRef.value;

        if(!author || !content) {
            return;
        }
        const msg = {
            author,
            content
        }

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(msg)
        }
        
        await fetch(baseUrl, option);
        nameRef.value = '';
        messagesRef.value = '';  
        onRefresh();
    }
}

attachEvents();