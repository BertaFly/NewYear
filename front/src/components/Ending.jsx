import React, {Component} from 'react';
import axios from 'axios';

class Ending extends Component {
    componentDidMount() {
        const body = {
            teamName: this.props.history.location.state.team,
            time: Date.now()
        }
        axios.post('http://localhost:8080/index.php/api/final', body)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <p>
                    Спасибо за участие, на этом пока все, ожидайте финальных результатов.
                </p>
                <p>
                    Квест подготовили:
                </p>
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