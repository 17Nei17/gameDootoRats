

import React from "react";
import './index.css';

class BrickCatGameWin extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    newGameInit() {
        this.props.updateState("menuPage");
    }

    

    render() {
        return (
            <div className={this.props.newState == 'gameWinIgorAlive' ? "igorAlive gameField" : "gameField"}>
                <div className="endTextWrapper">
                    <div className="endText">
                        <div>{this.props.newState == "gameWinIgorAlive" ? "Победа! Вы смогли заключить мир с дутокрысами!!" : "Победа! Больше дутокрыс c желанием создать ядерную бомбу не осталось!"}</div>
                        <div>{this.props.newState == "gameWinIgorAlive" ? "Время вражды Кирпекотов и Дутокрыс подошло к концу. В Catwar будут мирно жить все существа." : "Дутокрысы забыли о своих планах уничтожить catwar и ушли в тень."}</div>
                        <button onClick={() => this.newGameInit()} className="button">Вернуться в начало</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrickCatGameWin;
