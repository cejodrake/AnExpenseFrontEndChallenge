import http from './httpServices';
import { apiUrl } from '../config.json'
const apiEndPoint = 'http://localhost:3000/api/expenses';

function expenseUrl(id) {
    return `http://localhost:3000/api/expenses/${id}`;
}

export function getExpense(expenseId) {
    return http.get(expenseUrl(expenseId));
}

export function saveExpense(expense) {
    console.log(apiEndPoint);
    console.log(expense);
    /*  if (expense._id) {
          const body = { ...expense };
          delete body._id;
          return http.put(getExpense(expense._id));
      }*/
    //if (expense === null) return;

    return http.post(apiEndPoint, expense);
};