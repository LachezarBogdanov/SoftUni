import { del, get } from "./data/api.js";

const endpoints = {
    'allCars': '/data/cars?sortBy=_createdOn%20desc',
    'getCarById': '/data/cars/',
    'deleteCarById': '/data/cars/'
}

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

const userNav = document.querySelector('div .user');
const guestNav = document.querySelector('div .guest');

export async function updateNav() {
    let userData = await getUserData();
    
    if(userData != undefined) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

export async function getAllCars() {
    return await get(endpoints.allCars);
}

export async function getCarById(id) {
    return await get(endpoints.getCarById + id);
}

export async function deleteCarById(id) {
    return await del(endpoints.deleteCarById + id);
}

