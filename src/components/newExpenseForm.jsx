import React from "react";
import Form from './common/form';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import { getCategories } from "../services/categorieService";

import auth from '../services/authServices';

import { saveExpense } from '../services/expenseService';



class NewExpenseForm extends Form {

    state = {
        data: {
            date: "",
            categorieId: "",
            total: 0,
            comments: "",
            email: auth.getCurrenEmail() // get email for save for each user.
        },
        categories: [],
        errors: {},



    }

    schema = {
        _id: Joi.string(),
        date: Joi.date().required().label('Date'),
        categorieId: Joi.string().required().label('Categories'),
        total: Joi.number().required().min(0).label('Total'),
        comments: Joi.string(),
        email: Joi.string()


    }

    async componentDidMount() {
        this.getAllCategories();
        console.log(this.state.data.email)

    }
    doSubmit = async () => {

        try {

            const { data } = this.state;


            await saveExpense(data);

            this.clearInput();

            toast.success("Your information was saved successfully");


        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.date = error.response.data;
                toast.error(this.setState({ errors }));
            }
        }

    }

    async getAllCategories() {
        const { data: categories } = await getCategories();
        this.setState({ categories });
    }


    clearInput() {
        this.setState({
            data: {
                date: "",
                categorieId: "",
                total: 0,
                comments: ""
            },
        })
    }
    render() {
        return (
            <div className="container">
                <h1> New Expense  </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="jumbotron ">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-4 ">
                                    {this.renderInput("date", "Date", "date")}
                                    {this.renderSelect("categorieId", "Categories", this.state.categories)}
                                    {this.renderInput("total", "Total", "number")}
                                    {this.renderInput("comments", "Comments")}
                                    {this.renderButton("Save")}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }

}

export default NewExpenseForm;
