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
                В его фотоблоге есть фотографии мест где он бывал. Надо их посетить.
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

export default Forth;