import React from 'react';

import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authServices';
import { Redirect } from 'react-router-dom';


class LoginForm extends Form {

    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password) // I should create this service 
            window.location = "/report"

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.status;
                this.setState = ({ errors });
            }
        }
    }

    render() {
        return (
            <div className="content">

                <h1 >Login </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            {this.renderInput('username', 'Username')}
                            {this.renderInput('password', 'Password', 'password')}
                            {this.renderButton('Login')}
                        </div>
                    </div>

                </form>

            </div>
        )
    }

}
export default LoginForm;
