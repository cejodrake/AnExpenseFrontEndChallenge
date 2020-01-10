import http from './httpServices';
import { apiUrl } from '../config.json'
import jwtDecode from 'jwt-decode';

const apiEndPoint = apiUrl + '/auth';
//const apiEndPoint = '/auth';
const tokenKey = "token";



export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);

        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
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
    getCurrentUser,

}