import http from './httpServices';

const apiEndPoint = 'http://localhost:3000/api/expenses';
//const apiEndPoint = '/expenses';

function expenseUrl(id) {
    return `${apiEndPoint}/${id}`;
}

export function getExpense(expenseId) {
    return http.get(expenseUrl(expenseId));
}

export function saveExpense(expense) {


    return http.post(apiEndPoint, expense);
};