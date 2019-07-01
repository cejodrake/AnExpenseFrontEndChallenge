
//test form 

import React, { Component } from 'react';

import './App.css';
import LoginForm from './components/loginForm';

class App extends Component {

    state = {

    };

    render() {
        return (
            <main className="container">
                <h1> Hello test app </h1>
                <LoginForm />
            </main>



        );
    };
};

export default App;
