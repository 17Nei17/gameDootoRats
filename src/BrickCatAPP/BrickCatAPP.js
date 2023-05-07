import React from "react";
import BrickCatMenu from "./BrickCatMenu"
import BrickCatGame from "./BrickCatGame"
import BrickCatGameOver from "./BrickCatGameOver"
import BrickCatGameWin from "./BrickCatGameWin"
import './index.css';

class BrickCatAPP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'menuPage',
            currentItem: <BrickCatMenu updateState={this.updateState} />
        };
    }

    componentDidMount() {

    }

    updateState = (newState) => {
        let current = "";
        if (newState == "menuPage") {
            current = <BrickCatMenu updateState={this.updateState} />
        }
        if (newState == "newGame") {
            current = <BrickCatGame updateState={this.updateState} />
        }
        if (newState == "gameOver") {
            current = <BrickCatGameOver updateState={this.updateState} />
        }
        if (newState == "gameWin") {
            current = <BrickCatGameWin updateState={this.updateState} />
        }

        this.setState({
            currentState: newState, currentItem: current
        })
    }


    render() {
        return (
            <div className="catMenu">{
                this.state.currentItem
            }
            </div>
        )
    }
}

export default BrickCatAPP;