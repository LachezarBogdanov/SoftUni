import { get, put } from "./api.js";


const endpoints = {
    'characters': '/data/characters?sortBy=_createdOn%20desc',
    'characterById': '/data/characters/',
    'editChar': '/data/characters/'
}

export async function getAllCharacters() {
    return await get(endpoints.characters);
}

export async function getCharacterById(id) {
    return await get(endpoints.characterById + id);
}

export async function editCharacter(id, data) {
    return await put(endpoints.editChar + id, data);
}