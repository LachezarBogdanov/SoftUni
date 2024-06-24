function deleteByEmail() {
    const inputArea = document.querySelector('input[name=email]');
    let allEmails = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    let resultArea = document.getElementById('result');
    
    let resultRow = allEmails.find(el => el.textContent === inputArea.value);
    
    if(resultRow) {
        let parent = resultRow.parentElement;
        parent.remove();
        resultArea.textContent = 'Deleted.'
    } else {
        resultArea.textContent = 'Not found.'
    }
    
    inputArea.value = '';
    inputArea.focus();
}