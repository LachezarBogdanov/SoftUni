function extractText() {
    let liItems = document.querySelectorAll('li');
    let itemsText = Array.from(liItems).map(liItem => liItem.textContent);
    let resultArea = document.getElementById('result');

    resultArea.textContent = itemsText.join('\n');
}