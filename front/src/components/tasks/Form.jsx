import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    state = {
        answers: this.props.answers,
        minimumAnswer: 0,
        attempt: 1,
        gotPoints: false,
        earnedPoints: 0,
        totalPoints: 0,
        solvedThis: false
    }

    componentDidMount() {
        this.mount = true;
        const task = +this.props.history.location.hash.substring(1);
        const body = {
            teamName: this.props.team,
            task: task
        }
        axios.post('http://localhost:8080/index.php/api/has_solved', body)
            .then(res => {
                if (this.mount && task !== 5) {
                    this.setState({
                        solvedThis: res.data
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
        if (task === 5) {
            body.start = Date.now();
            axios.post('http://localhost:8080/index.php/api/five_start', body)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    componentWillUnmount(){
        this.mount = false;
    }

    onChangeHandler = (event) => {
        if (event.target.value.length <= +this.props.maxlength) {
            const newAnswers = [...this.state.answers];
            newAnswers[event.target.name] = event.target.value;
            let countAnswers = 0;
            newAnswers.forEach((item) => {
                if (item !== "") {
                    countAnswers++;
                }
            });
            if (this.mount) {
                this.setState({
                    answers: [...newAnswers],
                    minimumAnswer: countAnswers
                });
            }
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        /* for API request
        Send: team name, number task, answers (to validate), attempt number (depends points multiplication)
        Get: ok/ko, earned points, total points
        const team = this.props.team;
        const taskNbr = +this.props.history.location.hash.substring(1);
        const attempt = this.state.attempt;
        */
        const task = +this.props.history.location.hash.substring(1);
        if (task === 1) {
            const body = {
                teamName: this.props.team,
                task: task,
                time: Date.now(),
                answers: this.state.answers,
                try: this.state.attempt
            }
            axios.post('http://localhost:8080/index.php/api/first_task', body)
                .then(res => {
                    console.log(res.data);
                    const nextAttempt = this.state.attempt + 1;
                    if (this.mount) {
                        this.setState({
                            attempt: nextAttempt,
                            gotPoints: true,
                            earnedPoints: res.data.points
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (task === 2) {
            const body = {
                teamName: this.props.team,
                task: task,
                time: Date.now(),
                answers: this.state.answers,
                try: this.state.attempt
            }
            axios.post('http://localhost:8080/index.php/api/second_task', body)
                .then(res => {
                    console.log(res.data);
                    const nextAttempt = this.state.attempt + 1;
                    if (this.mount) {
                        this.setState({
                            attempt: nextAttempt,
                            gotPoints: true,
                            earnedPoints: res.data.points
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (task === 3) {
            const body = {
                teamName: this.props.team,
                task: task,
                time: Date.now(),
                answers: this.state.answers,
                try: this.state.attempt
            }
            axios.post('http://localhost:8080/index.php/api/third_task', body)
                .then(res => {
                    console.log(res.data);
                    const nextAttempt = this.state.attempt + 1;
                    if (this.mount) {
                        this.setState({
                            attempt: nextAttempt,
                            gotPoints: true,
                            earnedPoints: res.data.points
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (task === 4) {
            const body = {
                teamName: this.props.team,
                task: task,
                time: Date.now(),
                answers: this.state.answers,
                try: this.state.attempt
            }
            axios.post('http://localhost:8080/index.php/api/forth_task', body)
                .then(res => {
                    console.log(res.data);
                    const nextAttempt = this.state.attempt + 1;
                    if (this.mount) {
                        this.setState({
                            attempt: nextAttempt,
                            gotPoints: true,
                            earnedPoints: res.data.points
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (task === 5) {
            const body = {
                teamName: this.props.team,
                task: task,
                endTime: Date.now(),
                answers: this.state.answers,
                try: this.state.attempt
            }
            axios.post('http://localhost:8080/index.php/api/five_validate', body)
                .then(res => {
                    const nextAttempt = this.state.attempt + 1;
                    if (this.mount) {
                        this.setState({
                            attempt: nextAttempt,
                            gotPoints: true,
                            earnedPoints: res.data.points
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else  {
            const body = {
                teamName: this.props.team,
                task: task,
                start: Date.now(),
                answers: this.state.answers,
                try: this.state.attempt
            }
            axios.post('http://localhost:8080/index.php/api/sixth_task', body)
                .then(res => {
                    const nextAttempt = this.state.attempt + 1;
                    console.log(res.data)
                    if (this.mount) {
                        this.setState({
                            attempt: nextAttempt,
                            gotPoints: true,
                            earnedPoints: res.data.points
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    goNext = () => {
        this.props.changeStep();
    }

    render() {
        const stage = +this.props.history.location.hash.substring(1);
        return (
            <div className="Form">
                {!this.state.solvedThis ? 
                    <form onSubmit={this.submitHandler.bind(this)}>
                        {this.state.answers.map((item, i) => {
                            return (
                                <div key={i}>
                                    <input
                                        id={i}
                                        type="text"
                                        maxLength={this.props.maxlength}
                                        name={i}
                                        value={item}
                                        onChange={this.onChangeHandler.bind(this)}
                                    />
                                    <label htmlFor={i}>{i + 1}.</label>
                                </div>
                            )
                        })}
                        <button
                            type="submit"
                            disabled={(stage < 4) && this.state.minimumAnswer < 3}
                            style={(stage < 4) && this.state.minimumAnswer < 3 ? 
                                {
                                    backgroundColor: '#85e085',
                                    cursor:'auto'
                                }
                                :
                                null
                            }
                        >
                            Отправить ответы
                        </button>
                        {this.state.gotPoints && <p style={{fontWeight: 'bold', padding: '5px', background: '#e5bf9a'}}>Вы получили: {this.state.earnedPoints}</p>}
                        {this.state.gotPoints && <button onClick={this.goNext}>Дальше</button>}
                    </form>
                    :
                    <div>
                        <p style={{fontWeight: 'bold', fontSize: '1.5em'}}>Вы уже решили это задание и не можете улучшить результат</p>
                        <button onClick={this.goNext}>Дальше</button>
                    </div>
                }
            </div>
        )
    }
}

export default Form;