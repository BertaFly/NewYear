import React, {Component} from 'react';
import axios from 'axios';

class Ending extends Component {

    state = {
        total: 0,
        time: 0
    }
    componentDidMount() {
        if (this.props.history.location.state && this.props.history.location.state.team) {
            const body = {
                teamName: this.props.history.location.state.team,
                time: Date.now()
            }
            axios.post('https://retroback2019.azurewebsites.net/service/index.php/api/final', body)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        total: res.data.total,
                        time: res.data.time
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    render(){
        console.log(Math.floor(this.state.time / 60));
        return (
            <div>
                <p>Спасибо за участие, на этом пока все, ожидайте финальных результатов.</p>
                <p>Вы получили: <b> {this.state.total} баллов</b></p>
                <p>Время прохождения: <b>{Math.floor(this.state.time / 60)} мин {this.state.time % 60} сек</b></p>
                <p>Квест подготовили:</p>
                <div className="Author">
                    <img src="./pics/legrin.jpg" alt="Legrin"/>
                    <p>несравненный mastermind Legrin (Даниил Ковалев)</p>
                </div>
                <div className="Author">
                    <img src="./pics/bertafly.jpg" alt="BertaFly"/>
                    <p>будущий стартапер BertaFly (Ира Новикова)</p>
                </div>
                <a href="https://send.monobank.ua/2DZdX7mZA" className="Donate">
                    Donate
                </a>
            </div>
        )
    } 
}

export default Ending;