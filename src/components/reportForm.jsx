import React from "react";
import Form from './common/form';

import Joi from 'joi-browser';
import { toast } from 'react-toastify';

import { getExpensesForFilter } from './../services/reportService';

class ReportForm extends Form {
    state = {
        data: { dateInitial: "", dateEnd: "" },
        errors: {},
        message: "",
        allExpenses: []
    }


    schema = {
        dateInitial: Joi.date().min('1-1-2019').iso().required(),
        dateEnd: Joi.date().min('1-1-2019').iso().required(),

    }

    doSubmit = async () => {
        try {
            const { data: allExpenses } = await getExpensesForFilter(this.state.data);
            console.log(allExpenses)
            this.setState({ allExpenses })

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.dateEnd = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() {
        const { allExpenses, message } = this.state

        if (allExpenses === []) return toast.success("error");

        return (

            <div className="container">
                <h1> Report</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-3">
                            {this.renderInput("dateInitial", "Date Inital", "date")}
                            {this.renderInput("dateEnd", "Date End", "date")}
                        </div>
                        <div className="col">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Categorie</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Comments</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {allExpenses.map(info => (
                                        <tr key={info._id}>
                                            <td>{info.date}</td>
                                            <td>{info.categorie.name}</td>
                                            <td>{info.total}</td>
                                            <td> {info.comments}</td>

                                        </tr>
                                    ))}


                                </tbody>
                            </table>


                        </div>
                    </div>



                    {this.renderButton("Filter")}
                </form>

            </div >
        );
    };
};

export default ReportForm;
