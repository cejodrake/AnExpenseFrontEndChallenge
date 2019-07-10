
import React, { Component } from 'react';


class HeadColumnsTable extends Component {
    render() {
        return (
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Categorie</th>
                <th scope="col">Total Expense</th>
                <th scope="col">Comments</th>
            </tr>
        );
    }

}

export default HeadColumnsTable