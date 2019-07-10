import React from "react";
import Form from './common/form';

import Joi from 'joi-browser';
import { toast } from 'react-toastify';

import { calculateExpense, maxExpenseforCategorie } from '../utils/calculateExpenseCategorie';

import { getExpensesForFilter } from './../services/reportService';


class ReportForm extends Form {
    state = {
        data: { dateInitial: "", dateEnd: "" },
        errors: {},
        isDataOk: Boolean,

        allExpenses: []
    }

    schema = {
        dateInitial: Joi.date().min('1-1-2000').iso().required(),
        dateEnd: Joi.date().min('1-1-2019').iso().required(),

    }

    doSubmit = async () => {
        try {
            const { data: allExpenses } = await getExpensesForFilter(this.state.data);
            const expenseCategorieGroup = calculateExpense(allExpenses);
            const maxExpense = maxExpenseforCategorie(expenseCategorieGroup);

            toast.success("“spending too much money on :" + maxExpense['name'] + ".. as always");


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
        const { allExpenses } = this.state

        if (allExpenses === []) return toast.success("error");

        return (

            <div className="container">
                <h1> Report</h1>
                <div className="jumbotron ">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-3">
                                {this.renderInput("dateInitial", "Date Inital", "date")}
                                {this.renderInput("dateEnd", "Date End", "date")}
                                {this.renderButton("Filter")}
                            </div>
                            <div className="col">
                                <div className="table-wrapper-scroll-y  myscrollbar ">
                                    <table className="table table-bordered table-striped mb-0">
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
                                                    <td>{new Date(info.date).toDateString()}</td>
                                                    <td>{info.categorie.name}</td>
                                                    <td> {info.total}</td>
                                                    <td> {info.comments}</td>

                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </form>

                </div >
            </div>
        );
    };
};

export default ReportForm;
