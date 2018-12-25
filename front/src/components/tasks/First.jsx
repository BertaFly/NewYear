import React from 'react';
import Form from './Form';

const First = (props) => {
    const answers = ["", "", "", "", ""];
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Поиск мусора
            </h1>
            <div className="Description">
                Отыщите в виртуальных чат комнатах остатки его записей, которые не успели разложиться от диджитации. Возможно, вам понадобятся специальные очки.
            </div>
            <p><i>Максимум 100</i></p>
            <Form
                answers={answers}
                maxlength="4"
                history={props.history}
                team={props.team}
                changeStep={props.changeStep}
            />
        </div>
    )
}

export default First;