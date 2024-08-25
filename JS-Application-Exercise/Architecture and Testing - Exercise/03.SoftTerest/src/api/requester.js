import { userUtils } from "../utils/userUtils.js";

async function requester(method, url, data) {
    const userData = userUtils.getUser();
    const option = {
        method,
        headers: {}
    }

    if(userData) {
        option.headers['X-Authorization'] = userData.accessToken;
    }

    if(data) {
        option.headers["Content-Type"] = 'application/json',
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);

        if(!response.ok) {
            if(response.status === 403) {
                userUtils.clear();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if(response.status === 204) {
            return response;
        }

        return response.json();
    } catch (error) {
        alert(error);
    }
}

async function get(url) {
    return requester('GET', url);
}

async function post(url, data) {
    return requester('POST', url, data);
}

async function put(url, data) {
    return requester('PUT', url, data);
}

async function del(url) {
    return requester('DELETE', url);
}

export const api = {
    get,
    post,
    put,
    del
}