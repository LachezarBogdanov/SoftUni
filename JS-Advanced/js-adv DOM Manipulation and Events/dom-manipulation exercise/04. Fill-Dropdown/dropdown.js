function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menuArea = document.getElementById('menu');


    const optEl = document.createElement('option');
    optEl.textContent = newItemText.value;
    optEl.value = newItemValue.value;
    menuArea.append(optEl);

    newItemText.value = '';
    newItemValue.value = '';
}