import React from "react";
import BrickCatMenu from "./BrickCatMenu"
import BrickCatGame from "./BrickCatGame"
import BrickCatGameOver from "./BrickCatGameOver"
import BrickCatGameWin from "./BrickCatGameWin"
import BrickCatGameFaq from "./BrickCatGameFaq"
import './index.css';

import skywalker_punch_sound_3Song from "./skywalker_punch_sound_3.mp3"
import shindaSong from "./shinda.mp3"
import everlasting_SummerSong from "./Sergey_Eybog_-_Everlasting_Summer.mp3"
import alecHolowkaSong from "./audio.mp3"
import catImg from "./KK.png"
import IgorImg from "./kryska-igor.png"
import ratImg from "./98Tz.webp"
import LenaImg from "./kryska-lenka.png"
import cheese from "./2079.webp"

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
        if (newState == "newGame-shinda" || newState == "newGame-alecHolowka" || newState == "newGame-everlasting") {
            current = <BrickCatGame
                updateState={this.updateState}
                newState={newState}
                skywalker_punch_sound_3Song={skywalker_punch_sound_3Song}
                shindaSong={shindaSong}
                everlasting_SummerSong={everlasting_SummerSong}
                alecHolowkaSong={alecHolowkaSong}
                catImg={catImg}
                IgorImg={IgorImg}
                ratImg={ratImg}
                LenaImg={LenaImg}
                cheese={cheese}
            />
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