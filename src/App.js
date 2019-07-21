
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NewExpenseForm from "./components/newExpenseForm";
import LoginForm from './components/loginForm';
import NavBar from './components/common/navBar';

import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import NotFound from './components/notfound';
import RegisterForm from './components/registerForm';
import ReportForm from './components/reportForm';


import auth from './services/authServices';
import Logout from './components/logout';



class App extends Component {

    state = {

    }

    componentDidMount() {

        const user = auth.getCurrenUser();
        const email = auth.getCurrenEmail();
        this.setState({ user, email });
    }

    render() {
        const { user, email } = this.state;
        console.log(user);
        return (
            <React.Fragment>

                <ToastContainer />
                <NavBar user={user}  email= {email}/>
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/report" component={ReportForm} />
                        <Route path="/newexpense" component={NewExpenseForm} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/login" />
                    </Switch>
                </main>
            </React.Fragment>




        );
    };
};

export default App;
