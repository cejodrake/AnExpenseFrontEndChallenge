import http from './httpServices';
import { apiUrl } from '../config.json';
const apiEndPoint = 'http://localhost:3000/api/categories';

export function getCategories() {
    return http.get(apiEndPoint);
}
