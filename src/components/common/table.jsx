import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { data } = this.props;

        return (
            <tbody>

                {
                    data.map(info => (
                        <tr key={info._id}>
                            <td>{new Date(info.date).toDateString()}</td>
                            <td>{info.categorie.name}</td>
                            <td> {info.total}</td>
                            <td> {info.comments}</td>

                        </tr>
                    ))
                }


            </tbody >
        )
    }
}
export default Table;