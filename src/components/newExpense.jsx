import React, { Component } from "react";
import Form from './common/form';
import { async } from "q";

class NewExpense extends Form {

    doSumit = async () => {
        // do the save expense
    }

    render() {
        return (
            <div className="container">
                <h1> New Expnse </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("Date", "date", "date")}
                    {this.renderInput("Categoria", "categoria")}
                    {this.renderInput("Comment", "comment")}
                    {this.renderButton("save")}
                </form>
            </div>

        )
    }

}

export default NewExpense;
