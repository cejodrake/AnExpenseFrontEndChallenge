import { React } from "react";
import Form from './common/form';

import Joi from 'joi-browser';


class ReactForm extends Form {
    state = {
        data: { dateInitial: "", dateEnd: "" },
        errors: {}
    }


    schema = {
        dateInitial: Joi.date().format('YYYY/-MM-DD', 'DD-MM-YYY'),
        dateEnd: Joi.date().format('YYYY/-MM-DD', 'DD-MM-YYY')

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
                <h1> Report Expenses</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("dateInitial", "DateInitial", "date")}\
                    {this.renderInput("dateEnd", "DateEnd")}
                </form>

            </div>
        );
    };
};

export default ReactForm;
