import React from "react";
import BrickCatMenu from "./BrickCatMenu"
import BrickCatGame from "./BrickCatGame"
import BrickCatGameOver from "./BrickCatGameOver"
import BrickCatGameWin from "./BrickCatGameWin"
import BrickCatGameFaq from "./BrickCatGameFaq"
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
        if (newState == "newGame-shinda" || newState == "newGame-alecHolowka") {
            current = <BrickCatGame updateState={this.updateState} newState={newState} />
        }
        if (newState == "gameOver") {
            current = <BrickCatGameOver updateState={this.updateState} />
        }
        if (newState == "gameWinIgorAlive" || newState == "gameWinIgorDead") {
            current = <BrickCatGameWin updateState={this.updateState} newState={newState} />
        }
        if (newState == "faq") {
            current = <BrickCatGameFaq updateState={this.updateState} />
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