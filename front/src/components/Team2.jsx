import React, {Component} from 'react';
import Task from './tasks/TaskContainer';
import axios from 'axios';

class Team2 extends Component {
    state = {
        stage: 2,
        team: 'spyce_i_chervi'
    }

    componentDidMount(){
        if (localStorage.getItem('team') === null) {
            localStorage.setItem('team', 'spyce_i_chervi');
            const body = {
                teamName: 'spyce_i_chervi',
                time: Date.now()
            }
            axios.post('http://localhost:8080/index.php/api/team_start_time', body)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        this.setState({
            stage: +this.props.history.location.hash.substring(1)
        })
    }

    changeStep = () => {
        let stage = this.state.stage + 1;
        if (stage !== 3) {
            stage = stage === 7 ? 1 : stage;
            this.setState({
                stage: stage
            });
            const path = 'spyce_i_chervi#' + stage;
            this.props.history.push(path);
        } else {
            this.props.history.push('final');
        }
    }

    shouldComponentUpdate(nextProps) {
        const newStage = +nextProps.history.location.hash.substring(1);
        if (newStage !== this.state.stage) {
            this.setState({
                stage: newStage
            });
            return true;
        }
        return false;
    }

    render(){
        return (
            <div>
                <Task
                    history={this.props.history}
                    number={this.state.stage}
                    team={this.state.team}
                    changeStep={this.changeStep.bind(this)}/>
            </div>
        )
    }
}

export default Team2;