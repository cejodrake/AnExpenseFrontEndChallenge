import http from './httpServices';

const apiEndPoint = 'http://localhost:3000/api/categories';

//const apiEndPoint = '/categories';

export function getCategories() {
    return http.get(apiEndPoint);
}
