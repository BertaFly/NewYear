import React from 'react';
import Form from './Form';

const Third = (props) => {
    const answers = ["", "", "", "", ""];
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Заходят как-то в бар милениал, постмелинеал и я...
            </h1>
            <div className="Description">
                <b>Надо придумать описание </b> зайдем в бар где он обычно тусил. может бармен знает. Введите уникальные ингредиенты на английском языке
            </div>
            <Form
                answers={answers}
                maxlength="20"
                history={props.history}
                team={props.team}
                changeStep={props.changeStep}
            />
        </div>
    )
}

export default Third;