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
import harfest from "./harfest.mp3"
import catImg from "./KK.png"
import IgorImg from "./kryska-igor.png"
import ratImg from "./98Tz.webp"
import LenaImg from "./kryska-lenka.png"
import cheese from "./2079.webp"

import kryski_3 from "./kryski_3.png"
import windowsXP from "./2016-09-29-windows-xp-bliss-l5Eg.jpg"
import i_yPEzGo7YE from "./i_yPEzGo7YE.jpg"
import kryski_i_kerpich from "./kryski_i_kerpich.png"
import harfestPng from "./harfestPng.png"

class BrickCatAPP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
            currentState: 'menuPage',
            currentItem: <BrickCatMenu updateState={this.updateState} />
        };
    }

    componentDidMount() {
        this.onloadImage();
    }

    updateState = (newState) => {
        let current = "";
        if (newState == "menuPage") {
            current = <BrickCatMenu updateState={this.updateState} />
        }
        if (newState == "newGame-shinda" || newState == "newGame-alecHolowka" || newState == "newGame-everlasting" || newState == "newGame-harfest") {
            current = <BrickCatGame
                updateState={this.updateState}
                newState={newState}
                skywalker_punch_sound_3Song={skywalker_punch_sound_3Song}
                shindaSong={shindaSong}
                everlasting_SummerSong={everlasting_SummerSong}
                alecHolowkaSong={alecHolowkaSong}
                harfest={harfest}
                catImg={catImg}
                IgorImg={IgorImg}
                ratImg={ratImg}
                LenaImg={LenaImg}
                cheese={cheese}
                harfestPng={harfestPng}
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

    onloadImage() {
        let arrImg = [kryski_i_kerpich, i_yPEzGo7YE, windowsXP, kryski_3, cheese, IgorImg, catImg];
        let counter = 0;
        arrImg.forEach(element => {
            let img = new Image();
            img.src = element;
            img.onload = function () {
                // alert("image is loaded");
                counter++;
                console.log("img.onload");
                if (counter === arrImg.length) {
                    this.setState({ imageLoaded: true });
                }
            }.bind(this)
        });

    }


    render() {
        return (
            <div>
                <div>
                    <link rel="preload" href={catImg} as="image"></link>
                    <link rel="preload" href={IgorImg} as="image"></link>
                    <link rel="preload" href={ratImg} as="image"></link>
                    <link rel="preload" href={cheese} as="image"></link>

                    <link rel="preload" href={kryski_3} as="image"></link>
                    <link rel="preload" href={windowsXP} as="image"></link>
                    <link rel="preload" href={i_yPEzGo7YE} as="image"></link>
                    <link rel="preload" href={kryski_i_kerpich} as="image"></link>
                </div>

                <div className="catMenu">{
                    this.state.currentItem
                }
                    {!this.state.imageLoaded && <div className="loadMessage"><div >Загружаются картинки...</div> </div>}
                </div>
            </div>
        )
    }
}

export default BrickCatAPP;