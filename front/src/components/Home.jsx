import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        authorized: false
    }

    componentDidMount(){
        let check = localStorage.getItem('team');
        if (check) {
            this.setState({
                authorized: check
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.authorized ?
                    <div>
                        <h3>
                            Ирония виртуальности или с легким апгрейдом
                        </h3>
                        <ul style={{listStyleType: 'square', textAlign: 'left'}}>
                            <li>только один человек в команде вводит и отправляет ответы</li>
                            <li>однажды залогинился - теперь только под этой командой и играешь</li>
                            <li>во всех заданиях если не сказано другого за первую попытку получаешь 100% баллов, за вторую 80%, 3 и дальше - 60%</li>
                            <li>не перезагружать страницу</li>
                            <li>вводить ответы только латинскими буквами, регистр не важен, иногда важно правописание, так что лучше проверить как это слово пишется</li>
                            <li>команда, которая закончит первой, получит бонус в 50 очков. вторая 40, и так далее</li>
                        </ul>
                        <h1>
                            Пропал очень важный свидетель по делу об исчезновении ключа от ядра виртуальной реальности. Вы - набор первоклассных детективов в поисках улик, которые приведут либо к свидетелю, либо к ключу.
                        </h1>
                        <h4>
                            Выберите свою команду. Как только вы это сделаете, начнется игра.
                        </h4>
                        <div className="team">
                            <Link to={{
                                pathname: "/oblachnyi_atlas",
                                hash: "#1"
                            }}>
                                <img src="./pics/Atlas.png" alt="Облачный атлас"/>
                                Облачный атлас
                            </Link>
                        </div>
                        <div className="team">               
                            <Link to={{
                                pathname: "/spyce_i_chervi",
                                hash: "#3"
                            }}>
                                <img src="./pics/duna.jpg" alt="Спайс и Черви"/>
                                Спайс и Черви                        
                            </Link>
                        </div>
                        <div className="team">
                            <Link to={{
                                pathname: "/kletki_svyazany",
                                hash: "#5"
                            }}>
                                <img src="./pics/blade.jpg" alt="Клетки? Связаны"/>
                                Клетки? Связаны
                            </Link>
                        </div>
                        <div className="team">
                            <Link to={{
                                pathname: "/prizraki_v_dospehah",
                                hash: "#2"
                            }}>
                                <img src="./pics/ghost.jpg" alt="Призраки в Доспехах"/>
                                Призраки в Доспехах
                            </Link>
                        </div><div className="team">
                            <Link to={{
                                pathname: "/furioza_i_7maxov",
                                hash: "#4"
                            }}>
                                <img src="./pics/madmax.jpg" alt="Фуриоза и семь Максов"/>
                                Фуриоза и семь Максов
                            </Link>
                        </div>
                    </div>
                    :
                    <div>
                        Вы уже начали игру как команда {this.state.authorized}. Нажмите вперед в браузере.
                    </div>
                }
            </div> 
        )
    }
}

export default Home;