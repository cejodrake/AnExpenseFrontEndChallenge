import React, { Component } from "react";
import Form from './common/form';

class NewExpense extends Form {

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
