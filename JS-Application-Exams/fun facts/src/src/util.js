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

export async function getAllFacts() {
    return get('/data/facts?sortBy=_createdOn%20desc');
}

export async function getFactById(id) {
    return get('/data/facts/' + id);
}
