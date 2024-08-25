import { get } from "./data/api.js";

export function setUserData(data) {
    return localStorage.setItem('user', JSON.stringify(data));
}
export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}
export function clearUserData() {
    localStorage.removeItem('user');
}

export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        callback(data, event.target);
    }
}

export async function updateNav() {
    const userNav = document.querySelector('nav .user');
    const guestNav = document.querySelector('nav .guest');

    let userData = await getUserData();

    if(userData) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

export async function getAllEvents(){
    return await get('/data/events?sortBy=_createdOn%20desc');
}

export async function getEventById(id) {
    return await get('/data/events/' + id);
}

