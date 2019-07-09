import http from './httpServices';
import { apiUrl } from '../config.json';


const apiEndPoint = apiUrl + '/report';


export function getAllExpenses(dates) {
    return http.post(apiEndPoint, {
        dateInitial: dates.dateInitial,
        dateEnd: dates.dateEnd
    });
};


