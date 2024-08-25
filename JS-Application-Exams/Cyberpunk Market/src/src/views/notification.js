let spanNotification = document.querySelector('span');
let divToShow = document.querySelector('div#errorBox');

export async function notificationHandler(errorMsg) {
    
    spanNotification.textContent = errorMsg;
    divToShow.style.display = 'block';
    setTimeout(function() {
        divToShow.style.display = '';
    }, 3000)
}