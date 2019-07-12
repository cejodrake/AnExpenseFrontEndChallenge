import React from "react";
import Form from './common/form';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { calculateExpense, maxExpenseforCategorie } from '../utils/calculateExpenseCategorie';
import { getExpensesForFilter } from './../services/reportService';
import Table from './common/table';
import HeadColumnsTable from './common/columnTable';


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

            toast.warn("“spending too much money on :" + maxExpense['name'] + ".. as always");
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
                                            <HeadColumnsTable />
                                        </thead>
                                        <Table data={allExpenses} />
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
