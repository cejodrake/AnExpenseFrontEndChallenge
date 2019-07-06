import React from "react";
import Form from './common/form';
import Joi from 'joi-browser';
import { getCategories } from "../services/categorieService";

import { saveExpense } from '../services/expenseService';


class NewExpenseForm extends Form {

    state = {
        data: {
            date: "",
            categorieId: "",
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
        //    this.generateExpese();
    }
    doSubmit = async () => {
        console.log(this.state.data)
        await saveExpense(this.state.data);
        window.location("/")
    }

    async getAllCategories() {
        const { data: categories } = await getCategories();
        this.setState({ categories });
    }

    /*  async generateExpese() {
          const expenseId = this.props.match.params.id;
          if (expenseId === "new") return;
  
          try {
              const { data: expense } = await getExpense(expenseId);
              this.setState({ data: this.createExpense(expense) })
  
          } catch (ex) {
              if (ex.response && ex.response.status === 404) {
                  return this.props.history.replace("/not-found");
              }
          }
      }*/
    createExpense(expensive) {
        return {
            _id: expensive._id,
            date: new Date(expensive.date),
            categorieId: expensive.categories._id,
            total: expensive.total,
            comment: expensive.comment
        };
    }

    render() {
        return (
            <div className="container">
                <h1> New Expense !!! </h1>
                <form onSubmit={this.handleSubmit}>
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
