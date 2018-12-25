import React from 'react';
import Form from './Form';

const Sixth = (props) => {
    const answers = [""];
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Шпион выйди вон
            </h1>
            <div className="Description">
                <p>Cреди вас есть человек, который контактировал с вором. Вычислите его и введите пароль, который у него есть.</p>
                <p><i>Максимум 40</i></p>
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

export default Sixth;