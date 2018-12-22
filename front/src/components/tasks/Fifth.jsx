import React from 'react';
import Form from './Form';

const Fifth = (props) => {
    const answers = [""];
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Perpetuum Mobile
            </h1>
            <div className="Description">
                <p>У него дома мы нашли странный механизм. Что это? Как оно работает? Надо быть осторожными.</p>
                <p><i>Чем быстрее разберете, тем больше баллов получите</i></p>
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

export default Fifth;