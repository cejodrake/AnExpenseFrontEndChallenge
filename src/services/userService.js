import http from './httpServices';


//import { apiUrl } from '../config.json';


//const apiEndPoint = apiUrl + '/users';
const apiEndPoint = '/users';

export function register(user) {
    return http.post(apiEndPoint, {
        email: user.username,
        password: user.password,
        name: user.name
    });
};
