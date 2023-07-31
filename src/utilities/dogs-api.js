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