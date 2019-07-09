import React from "react";
import Form from './common/form';

import Joi from 'joi-browser';


class ReportForm extends Form {
    state = {
        data: { dateInitial: "", dateEnd: "" },
        errors: {},
        allExpenses: []
    }


    schema = {
        dateInitial: Joi.date().min('1-1-2019').iso().required(),
        dateEnd: Joi.date().min('1-1-2019').iso().required(),

    }

    doSubmit = async () => {
        try {
            const res = "" // here I should call my service  report
            window.location = "/"
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.dateInitial = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h1> Report</h1>
                <form onSubmit={this.handleSubmit}>


                    {this.renderInput("dateInitial", "Date Inital", "date")}
                    {this.renderInput("dateEnd", "Date End", "date")}

                    <tbody>

                    </tbody>
                    {this.renderButton("Filter")}
                </form>

            </div >
        );
    };
};

export default ReportForm;
