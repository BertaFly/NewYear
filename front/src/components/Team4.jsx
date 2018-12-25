import React, {Component} from 'react';
import Task from './tasks/TaskContainer';
import axios from 'axios';

class Team4 extends Component {
    state = {
        stage: 4,
        team: 'prizraki_v_dospehah',
        totalPoints: 0
    }

    componentDidMount(){
        if (localStorage.getItem('team') === null) {
            localStorage.setItem('team', 'prizraki_v_dospehah');
            const body = {
                teamName: 'prizraki_v_dospehah',
                time: Date.now()
            }
            axios.post('https://retroback2019.azurewebsites.net/service/index.php/api/team_start_time', body)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        axios.post('https://retroback2019.azurewebsites.net/service/index.php/api/get_total_points', {teamName: 'prizraki_v_dospehah'})
            .then(res => {
                this.setState({
                    stage: +this.props.history.location.hash.substring(1),
                    totalPoints: res.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    changeStep = () => {
        let stage = this.state.stage + 1;
        if (stage > 6) {
            stage = stage - 6;
        };
        if (stage !== 2) {
            axios.post('https://retroback2019.azurewebsites.net/service/index.php/api/get_total_points', {teamName: 'prizraki_v_dospehah'})
                .then(res => {
                    this.setState({
                        stage: stage,
                        totalPoints: res.data
                    });
                })
                .catch(error => {
                    console.log(error);
                });
            const path = 'prizraki_v_dospehah#' + stage;
            this.props.history.push(path)
        } else {
            this.props.history.push('final', {team: 'prizraki_v_dospehah'});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const newStage = +nextProps.history.location.hash.substring(1);
        if (newStage !== this.state.stage || nextState.totalPoints !== this.state.totalPoints) {
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
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{margin: 0}}><i>Призраки в доспехах</i></p>
                    <p style={{margin: 0}}><b>Очки: </b>{this.state.totalPoints}</p>
                </div>
                <Task
                    history={this.props.history}
                    number={this.state.stage}
                    team={this.state.team}
                    changeStep={this.changeStep.bind(this)}/>
            </div>
        )
    }
}

export default Team4;