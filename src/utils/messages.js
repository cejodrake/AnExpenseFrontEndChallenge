export function messages(expense) {

    const message = [
        'Spending too much money on',
        'Should save money in this categorie ',
        'Saw that categorie you spending too much',
        'See that you spend a lot there on '

    ]

    const totalMessages = message.length;

    const messageSelect = Math.floor(Math.random() * totalMessages);

    return message[messageSelect] + " " + expense.toUpperCase() + " " + " as always ";

}