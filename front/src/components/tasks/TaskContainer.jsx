import React from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import NoMatch from '../NoMatch';

const TaskContainer = (props) => {
    return (
        <div>
            {
                props.number === 1 ?
                    <First
                        team={props.team}
                        history={props.history}
                        changeStep={props.changeStep}
                    />
                    :
                props.number === 2 ?
                    <Second 
                        team={props.team}
                        history={props.history}
                        changeStep={props.changeStep}
                    />
                    :
                props.number === 3 ?
                    <Third 
                        team={props.team}
                        history={props.history}
                        changeStep={props.changeStep}
                    />
                    :
                props.number === 4 ?
                    <Forth 
                        team={props.team}
                        history={props.history}
                        changeStep={props.changeStep}
                    />
                    :
                props.number === 5 ?
                    <Fifth 
                        team={props.team}
                        history={props.history}
                        changeStep={props.changeStep}
                    />
                    :
                props.number === 6 ?
                    <Sixth 
                        team={props.team}
                        history={props.history}
                        changeStep={props.changeStep}
                    />
                    :
                    <NoMatch/>
            }
        </div>
    )
}

export default TaskContainer;