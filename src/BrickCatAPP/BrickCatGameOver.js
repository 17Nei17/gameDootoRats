

import React from "react";
import './index.css';

class BrickCatGameOver extends React.Component {
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
            <div className="gameField loose">
                <div className="endTextWrapper">
                    <div className="endText">
                        <div>Вы проиграли =(</div>
                        <div>Catwar стал еще ближе к удалению...</div>
                        <button onClick={() => this.newGameInit()} className="button">Вернуться в начало</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrickCatGameOver;
