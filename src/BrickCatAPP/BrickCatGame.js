import React from "react";
// import json from "./alecHolowka.json"
import jsonshinda from "./shinda.json"
import jsonalecHolowka from "./alecHolowka.json"
import jsonEverlasting from "./everlasting.json"


const audioPunch = new Audio('./skywalker_punch_sound_3.mp3');
const shinda = new Audio('./shinda.mp3');
const everlasting_Summer = new Audio('./Sergey_Eybog_-_Everlasting_Summer.mp3');
const alecHolowka = new Audio('./audio.mp3');

class BrickCatGame extends React.Component {
    constructor(props) {
        super(props);
        this.cat = document.querySelector(".catSit");
        this.state = {
            counter: 1900,
            health: 5,
            intervalId: null
        };
    }


    componentWillMount() {
        this.audioPunch = audioPunch;
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
        if (this.props.newState === "newGame-shinda") {
            this.audio = shinda;
            this.json = jsonshinda;
        } else if (this.props.newState === 'newGame-everlasting') {
            this.audio = everlasting_Summer;
            this.json = jsonEverlasting;

        } else {
            this.audio = alecHolowka;
            this.json = jsonalecHolowka;
        }
        this.audio.volume = .5;
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
        clearInterval(this.state.intervalId);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        if (this.maxValue + 6000 < this.state.counter) {
            this.stopAudioAndInterval();
            this.gameWin(this.isIgorAlive);
        }
        for (var key in this.json) {
            if (key == this.state.counter) {
                this.createMouse(this.json[key]);
            }
        }

        let catTop, cheeseTop, mouseTop;
        if (document.querySelector(".catSit") && document.querySelector(".cheese") && document.querySelector(".mouse")) {
            catTop = parseInt(window.getComputedStyle(document.querySelector(".catWrapper")).getPropertyValue("left"));
            cheeseTop = parseInt(window.getComputedStyle(document.querySelector(".cheese")).getPropertyValue("left"));
        }
        document.querySelectorAll(".mouse").forEach(element => {
            mouseTop = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
            if ((mouseTop >= cheeseTop) && mouseTop && cheeseTop) {
                if (!element.classList.contains('dead')) { // не умерла крыса и пришла к сыру
                    if (element.classList.contains('igor')) {
                        // не мертвый игорь не заканчивает игру
                        this.isIgorAlive = true;
                    } else {
                        this.stopAudioAndInterval();
                        console.log("cheese")
                        this.gameOver();
                    }


                } else {
                    if (element.classList.contains('igor')) { // мертвые игори ничего не делают
                        this.isIgorAlive = false;
                    }
                }
                element.remove();
            }
        });
    }

    createMouse(ratType) {
        let newMouse = document.createElement('img');
        if (ratType === "custom") {
            newMouse.src = "./98Tz.webp";
            newMouse.className = "mouse";
        } else if (ratType === "igor") {
            newMouse.src = "./kryska-igor.png";
            newMouse.className = "mouse igor";
        } else if (ratType === "ratWoman") {
            newMouse.src = "./kryska-lenka.png";
            newMouse.className = "mouse ratWoman";
        }


        if (document.querySelector(".mouseWrapper")) {
            document.querySelector(".mouseWrapper").prepend(newMouse);
        }
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.setState(prevState => ({ counter: this.state.counter + 10 }));
        }, 10);
        this.setState({ intervalId });
        this.isIgorAlive = true;
        this.cat = document.querySelector(".catSit");
        this.currentTime = 1800;
        var json = this.json;
        this.audio.play();

        this.maxValue = Math.max(...Object.keys(json));
    }


    onKeyPressed(e) {
        if (document.querySelector(".catSit")) {
            document.querySelector(".catSit").classList.add("animate");
            this.animateCat();
            let catTop = parseInt(window.getComputedStyle(document.querySelector(".catWrapper")).getPropertyValue("left"));
            let mouseTop;
            let miss = true;
            document.querySelectorAll(".mouse").forEach(element => {
                mouseTop = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
                if ((mouseTop >= catTop - 30 && mouseTop <= catTop + 30)) {
                    element.classList.add("dead");
                    this.audioPunch.play();
                    setTimeout(function run() {
                        this.audioPunch.pause();
                        this.audioPunch.currentTime = 0;
                    }.bind(this), 120);

                    miss = false;
                }
            })
            miss && this.reduceHealth();
        }
    }

    reduceHealth() {
        this.setState({ health: this.state.health - 1 }, function () {
            this.checkHealth()
        })
    }

    checkHealth() {
        console.log(this.state.health)
        if (this.state.health <= 0) {
            console.log("lowHP")
            this.stopAudioAndInterval();
            this.gameOver();
        }
    }

    stopAudioAndInterval() {
        this.audioPunch.pause();
        this.audioPunch.srcObj = null;
        this.audio.pause();
        this.audio.srcObj = null;
        // this.currentGameState = "mount";
        // clearInterval(this.interval);
    }

    animateCat() {
        var frame = 1;
        var el = document.querySelector(".catSit");

        setTimeout(function run() {
            el.classList.remove("frame0");
            el.classList.add("frame" + frame);
            frame++;
        }, 0);
        setTimeout(function run() {
            el.classList.remove("frame1");
            el.classList.add("frame" + frame);
            frame++;
        }, 40);
        setTimeout(function run() {
            el.classList.remove("frame2");
            el.classList.add("frame" + frame);
            frame++;
        }, 80);
        setTimeout(function run() {
            el.classList.remove("frame" + frame);
            el.classList.add("frame0");
        }, 160);
    }


    gameOver() {
        this.props.updateState("gameOver");
    }

    gameWin(isIgorAlive) {
        if (isIgorAlive) {
            this.props.updateState("gameWinIgorAlive");
        } else {
            this.props.updateState("gameWinIgorDead");
        }
    }

    render() {
        return (
            <div className={this.props.newState === 'newGame-everlasting' ? "gameField everlasting" : "gameField"}>
                <div>
                    <div className="catWrapper"><img src="./KK.png" className="catSit frame0"></img></div>
                    <img src="./2079.webp" className="cheese"></img>
                </div>
                <div className="mouseWrapper">
                    {/* <img src="./98Tz.webp" className="mouse"></img> */}
                </div>
                <div className="health">у вас осталось {this.state.health} промаха</div>
                {this.props.newState === 'newGame-everlasting' ? <div className="info-text">Нужно чуть-чуть подождать</div> : ''}
                <p>Counter: {this.state.counter} ms</p>
            </div>
        );
    }
}

export default BrickCatGame;