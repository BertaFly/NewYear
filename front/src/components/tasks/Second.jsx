import React from 'react';
import Form from './Form';

const Second = (props) => {
    const answers = ["", "", "", "", ""];
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Idols
            </h1>
            <div className="Description">
                Он был известным коллекционером картин прошлого. Возможно мы сможем найти на них что-то посмотрев на них в другом свете?
            </div>
            <p><i>Максимум 100</i></p>
            <Form
                answers={answers}
                maxlength="2"
                history={props.history}
                team={props.team}
                changeStep={props.changeStep}
            />
        </div>
    )
}

export default Second;