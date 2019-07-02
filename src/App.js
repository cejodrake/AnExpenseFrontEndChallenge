
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginForm from './components/loginForm';
import NavBar from './components/common/navBar';

import './App.css';
import 'react-toastify/dist/ReactTostify.css';
import NotFound from './components/notfound';



class App extends Component {

    state = {
        user =""
    }
    render() {
        return (


            <React.Fragment>
                <ToastContainer user="Juan Carlos" />
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/not-found" component={NotFound} />
                    </Switch>
                </main>
            </React.Fragment>




        );
    };
};

export default App;
