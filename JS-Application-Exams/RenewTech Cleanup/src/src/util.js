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

export async function getAllCarts() {
    return await get('/data/solutions?sortBy=_createdOn%20desc');
}

export async function getCartById(id) {
    return await get('/data/solutions/' + id);
}

export async function updateNav() {
    const userNav = document.querySelector('div .user');
    const guestNav = document.querySelector('div .guest');

    let userData = await getUserData();

    if(userData) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

