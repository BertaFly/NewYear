import React from 'react';
import Form from './Form';

const Forth = (props) => {
    const answers = [""];
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                But first, let me take a selfie
            </h1>
            <div className="Description">
                <b>Надо придумать описание </b> промониторим соцсети. может что-то интересное найдем
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

export default Forth;