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
                <b>Надо придумать описание </b> Искать на плакатах УФ буквы
            </div>
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