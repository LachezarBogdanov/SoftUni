function addItem() {
    let textInputArea = document.getElementById('newItemText');
    let ulItems = document.getElementById('items');
    let newItem = textInputArea.value;

    let createNewItem = document.createElement('li');
    createNewItem.textContent = newItem;
    ulItems.append(createNewItem);
    
    let deleteEl = document.createElement('a');
    deleteEl.href = '#';
    deleteEl.textContent = '[Delete]';
    createNewItem.append(deleteEl);

    deleteEl.addEventListener('click', (event) => {
        let parentEl = event.currentTarget.parentElement;
        parentEl.remove();
    })

    textInputArea.value = '';
    textInputArea.focus();
}