import React, { Component } from "react";
import Form from './common/form';
import { getCategories } from "../services/categorieService";



class NewExpense extends Form {

    state = {
        date: new Date(),
        categoriaId: "",
        total: 0,
        comment: ""

    }
    async componentDidMount() {
        const getAllCategories = await getCategories();
    }
    doSumit = async () => {
        // do the save expense
    }

    render() {
        return (
            <div className="container">
                <h1> New Expnse </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("date", "date", "date")}
                    {this.renderInput("categoria", "categoria")}
                    {this.renderInput("total", "total", "number")}
                    {this.renderInput("comment", "comment")}
                    {this.renderButton("Save")}
                </form>
            </div>

        )
    }

}

export default NewExpense;
