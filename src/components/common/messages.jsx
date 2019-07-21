
import React from 'react';

const messages = ({ expense }) => {


    const message = [
        'Spending too much money on',
        'You should save money in this ',
        'Spending too much money on this place '
    ]


    const totalMessages = message.length();

    const messageSelect = Math.floor(Math.random() * totalMessages);

    return message[messageSelect] + expense + " as always ";


}

export default messages;