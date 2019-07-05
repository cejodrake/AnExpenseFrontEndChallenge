import http from './httpServices';

const apiEndPoint = 'http://localhost:3000/api/expenses';


export function saveExpense(expense) {

    if (expense._id) {
        const body = { ...expense };
        delete body._id;
        return http.put(`${apiEndPoint}/${expense._id}`);
    }
    return http.post(apiEndPoint, expense);
};