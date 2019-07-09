import React from "react";
import Form from './common/form';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { getCategories } from "../services/categorieService";

import { saveExpense } from '../services/expenseService';


class NewExpenseForm extends Form {

    state = {
        data: {
            date: "",
            categorieId: "",
            total: 0,
            comments: ""
        },

        categories: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        date: Joi.date().required().label('Date'),
        categorieId: Joi.string().required().label('Categories'),
        total: Joi.number().required().min(0).label('Total'),
        comments: Joi.string().required().max(30).label('Comments')
    }

    async componentDidMount() {
        this.getAllCategories();
    }
    doSubmit = async () => {

        try {
            const res = await saveExpense(this.state.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.date = error.response.data;
                toast.error(this.setState({ errors }));

            }
        }


        toast.success("Success");



        //  window.location = "/newexpense"

    }

    async getAllCategories() {
        const { data: categories } = await getCategories();
        this.setState({ categories });
    }


    createExpense(expensive) {
        return {
            _id: expensive._id,
            date: new Date(expensive.date),
            categorieId: expensive.categories._id,
            total: expensive.total,
            comments: expensive.comments
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <h1> New Expense  </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="row">

                            <div className="col-l5">
                                {this.renderInput("date", "Date", "date")}
                                {this.renderSelect("categorieId", "Categories", this.state.categories)}
                                {this.renderInput("total", "Total", "number")}
                                {this.renderInput("comments", "Comments")}
                                {this.renderButton("Save")}
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }

}

export default NewExpenseForm;
