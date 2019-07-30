import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authServices';
import { toast } from 'react-toastify';
import LoadingPage from './common/loading';

class LoginForm extends Form {

    state = {
        data: { username: "", password: "" },
        errors: {},
        isLoading: false
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password) // I should create this service 
            this.setState({ isLoading: true })
            localStorage.setItem("email", data.username);
            window.location = '/report'

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                toast.error(errors.username = ex.response.data);
            }
        }
    }

    render() {
        const { isLoading } = this.state;
        if (isLoading) {
            return (
                <LoadingPage />
            )
        };
        return (
            <div className="container">
                <div className="divCenter">
                    <h1 >Login </h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-sm-10 ">
                                {this.renderInput('username', 'Username')}
                                {this.renderInput('password', 'Password', 'password')}
                                {this.renderButton('Login')}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default LoginForm;
