import React, { Component } from "react";
import Form from './common/form';

class NewExpense extends Form {

    render() {
        return (
            <div className="container">
                <h1> New Expnse </h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput
                    }
                </form>
            </div>

        )
    }

}