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
                Согласно нашим записям он каждый вечер отдыхал в баре ‘КриптоБухач’. Надо мягко спросить бармена, может он что-то заметил.
            </div>
            <p><i>Максимум 100</i></p>
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