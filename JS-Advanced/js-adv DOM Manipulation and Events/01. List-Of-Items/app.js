function addItem() {
    let inputText = document.getElementById('newItemText');
    let items = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = inputText.value;
    
    items.append(liElement);
    inputText.value = '';
    inputText.focus();
}