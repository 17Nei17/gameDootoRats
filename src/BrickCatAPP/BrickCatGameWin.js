

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
            <div className="gameField">
                <div className="endTextWrapper">
                    <div className="endText"><div>Победа! Больше дутокрыс не осталось</div>
                        <button onClick={() => this.newGameInit()} className="button">Вернуться в начало</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrickCatGameWin;
