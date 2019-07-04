import React, { Component } from "react";
import Form from './common/form';
import { getCategories } from "../services/categorieService";



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



    render() {
        return (
            <div className="container">
                <h1> New Expense !!! </h1>
                <form>
                    <div className="container">
                        {this.renderInput("date", "Date")}
                        {this.renderInput("categorieId", "Categories")}
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
