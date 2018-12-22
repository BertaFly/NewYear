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
                            Приветствуем вас на новогоднем квесте. Тут будут правила.
                        </h3>
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
                                pathname: "/kletki,svyazany",
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