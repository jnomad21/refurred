import sendRequest from "./send-request"
const BASE_URL = '/api/dogs';

export async function createDogRequest(dogData){
    return sendRequest(BASE_URL, "POST", dogData)
}

export async function dogsIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function getDogRequest(dogId){
    return sendRequest(`${BASE_URL}/${dogId}`) 
}

export async function deleteDogRequest(dogId){
    return sendRequest(`${BASE_URL}/${dogId}`, "DELETE")
}

export async function updateDogRequest(dogId, dogData){
    return sendRequest(`${BASE_URL}/${dogId}`, "PUT", dogData)
}
export async function createBreederRequest(breederData){
    return sendRequest(`${BASE_URL}/newbreeder`, "POST", breederData)
}

export async function breederIndexRequest(){
    return sendRequest(`${BASE_URL}/breeders`);
}

export async function getBreederRequest(breederId){
    return sendRequest(`${BASE_URL}/breeders/${breederId}`) 
}

export async function updateBreederRequest(breederId, breederData){
    return sendRequest(`${BASE_URL}/breeders/${breederId}`, "PUT", breederData)
}
