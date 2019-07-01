import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './input';


class Form extends Component {

    state = {
        data: {},
        errors: {}
    };
    validate = () => {
        const options = { abortEarl: false };
        const { error } = Joi.validate(this.state.date, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let i of error.details) {
            erros[i.path[0]] = item.message;
        }
        return errors;
    }
}