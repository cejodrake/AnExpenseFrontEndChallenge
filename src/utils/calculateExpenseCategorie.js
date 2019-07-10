
import _ from 'lodash';

export function calculateExpense(data) {

    return _.chain(data).groupBy('categorie.name').map(function (v, i) {
        return {
            name: i,
            total: _.sum(_.map(v, 'total'))
        }
    }).value();
};

export function maxExpenseforCategorie(data) {
    return _.maxBy(data, function (o) {
        return o.total
    });
}