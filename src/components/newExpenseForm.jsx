import React, { Component } from "react";
import Form from './common/form';
import Joi from 'joi-browser';
import { getCategories } from "../services/categorieService";

import { saveExpense } from '../services/expenseService';

class NewExpenseForm extends Form {

    state = {
        data: {
            date: "",
            categoriaId: "",
            total: 0,
            comment: ""
        },
        categories: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        date: Joi.date().required().label('Date'),
        categorieId: Joi.string().required().label('Categories'),
        total: Joi.number().required().min(0).label('Total'),
        comment: Joi.string().required().max(30).label('Comment')
    }

    async componentDidMount() {
        this.getAllCategories();
    }
    doSumit = async () => {

        await saveExpense(expense);
        window.location("/reports")
    }

    async getAllCategories() {
        const { data: categories } = await getCategories();
        this.setState({ categories });
    }

    createExpense(expensive) {
        return {
            _id: expensive._id,
            categorieId: expensive.categories._id,
            total: expensive.total,
            comment: expensive.comment
        };
    }

    render() {
        return (
            <div className="container">
                <h1> New Expense !!! </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="container">
                        {this.renderInput("date", "Date", "date")}
                        {this.renderSelect("categorieId", "Categories", this.state.categories)}
                        {this.renderInput("total", "Total", "number")}
                        {this.renderInput("comment", "Comment about your expense")}
                        {this.renderButton("Save")}
                    </div>
                </form>
            </div>

        )
    }

}

export default NewExpenseForm;
