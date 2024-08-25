import { get, post } from "./api.js"


const endpoints = {
    like: '/data/likes',
    likesByCharacterId: (solutionId) => `/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`,
    likesByUserId: (solutionId, userId) => `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getTotalLikes(id) {
    return await get(endpoints.likesByCharacterId(id));
}

export async function hasLiked(solutionId, userId) {
    return await get(endpoints.likesByUserId(solutionId, userId));
}

export async function like(id) {
    return await post(endpoints.like, {id});
}