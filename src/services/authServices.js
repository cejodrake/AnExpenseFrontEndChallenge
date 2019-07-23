import http from './httpServices';
import { apiUrl } from '../config.json'

//const apiEndPoint = apiUrl + '/auth';
const apiEndPoint = '/auth';
const tokenKey = "token";



export function getCurrenUser() {
    try {
        return localStorage.getItem(tokenKey);
    } catch (error) {
        return null;
    }
}

export function getCurrenEmail() {

    return localStorage.getItem("email");


}
export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndPoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

function logout() {
    localStorage.removeItem(tokenKey);
}


export default {
    login,
    logout,
    getCurrenUser,
    getCurrenEmail


}