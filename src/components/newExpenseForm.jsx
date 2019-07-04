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
                <h1> New Expnse </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("date", "Date")}
                    {this.renderInput("categoriaId", "Categoria")}
                    {this.renderInput("total", "Total", "number")}
                    {this.renderInput("comment", "Comment")}
                    {this.renderButton("Save")}
                </form>
            </div>

        )
    }

}

export default NewExpenseForm;
