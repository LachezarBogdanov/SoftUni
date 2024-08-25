 import { clearUserData, getUserData, setUserData } from '../util.js';
import {post, get} from './api.js';
 
 const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
 };
 
 export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });

    setUserData({
        _id: result._id,
        email: result.email,
        accessToken: result.accessToken
    });
 }
 
 export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });

    setUserData({
        _id: result._id,
        email: result.email,
        accessToken: result.accessToken
    });
 }

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();

    await promise;
}

export async function updateNav() {
    let userNav = document.querySelector('div .user');
    let guestNav = document.querySelector('div .guest');
    let userData = await getUserData();

    if(userData) {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}