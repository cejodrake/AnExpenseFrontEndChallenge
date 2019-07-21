import http from './httpServices';
import { apiUrl } from '../config.json';


const apiEndPoint = apiUrl + '/report';

//const apiEndPoint = '/report';


export function getExpensesForFilter(data) {
    return http.post(apiEndPoint, {
        dateInitial: data.dateInitial,
        dateEnd: data.dateEnd,
        email: data.email
    });
};


