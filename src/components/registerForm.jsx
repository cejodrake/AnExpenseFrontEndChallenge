import React from 'react';
import Form from './common/form';

import Joi from 'joi-browser';
import auth from '../services/authServices';
import { register } from './../services/userService';
import { toast } from 'react-toastify';


import LoadingPage from './common/loading';
class RegisterForm extends Form {

    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    }

    schema = {
        username: Joi.string().email().required().label('Username'),
        password: Joi.string().min(6).required().label('Password'),
        name: Joi.string().required().label('Name')

    }

    doSubmit = async () => {
        try {
            await register(this.state.data);
            this.setState({ isLoading: true })
            toast.success("Your information was saved successfully!");
            window.location = "/login"

        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = error.response.data;
                toast.error(this.setState({ errors }));
            }
        }
    }
    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <LoadingPage />
            );
        }

        return (
            <div className="container">
                <div className="divCenter">

                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit} >
                        <div className="row">
                            <div className="col-sm-10">
                                {this.renderInput('username', 'Username')}
                                {this.renderInput('password', 'Password', 'password')}
                                {this.renderInput('name', 'Name')}
                                {this.renderButton('Register')}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }

}

export default RegisterForm;


