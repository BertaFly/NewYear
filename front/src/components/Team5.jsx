import React, {Component} from 'react';
import Task from './tasks/TaskContainer';
import axios from 'axios';

class Team5 extends Component {
    state = {
        stage: 5,
        team: 'furioza_i_7maxov'
    }

    componentDidMount(){
        if (localStorage.getItem('team') === null) {
            localStorage.setItem('team', 'furioza_i_7maxov');
            const body = {
                teamName: 'furioza_i_7maxov',
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
        if (stage > 6) {
            stage = stage - 6;
        };
        if (stage !== 4) {
            this.setState({
                stage: stage
            });
            const path = 'furioza_i_7maxov#' + stage;
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

export default Team5;