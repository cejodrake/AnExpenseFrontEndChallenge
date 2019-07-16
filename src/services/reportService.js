import http from './httpServices';
import { apiUrl } from '../config.json';


//const apiEndPoint = apiUrl + '/report';

const apiEndPoint = '/report';


export function getExpensesForFilter(dates) {
    return http.post(apiEndPoint, {
        dateInitial: dates.dateInitial,
        dateEnd: dates.dateEnd
    });
};


