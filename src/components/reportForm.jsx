import { React } from "react";
import Form from './common/form';

import Joi from 'joi-browser';


class ReactForm extends Form {
    state = {
        data: { dateInitial: "", dateEnd: "" },
        errors: {}
    }

    schema = {
        dateInitial: Joi.date().format('YYYY/-MM-DD', 'DD-MM-YYY'),
        dateEnd: Joi.date().format('YYYY/-MM-DD', 'DD-MM-YYY')

    }
    doSubmit = async () => {

    }


}

export default ReactForm;
