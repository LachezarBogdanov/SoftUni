function notify(message) {
    const divToShowMsg = document.querySelector('#notification');
    divToShowMsg.textContent += message;
    divToShowMsg.style.display = 'block';
    
    divToShowMsg.addEventListener('click', () => {
      divToShowMsg.style.display = 'none';
    })
}