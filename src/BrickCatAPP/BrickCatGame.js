import React from "react";
// import json from "./alecHolowka.json"
import jsonshinda from "./shinda.json"
import jsonalecHolowka from "./alecHolowka.json"


class BrickCatGame extends React.Component {
    constructor(props) {
        super(props);
        this.cat = document.querySelector(".catSit");
        this.initGame();
    }


    componentWillMount() {
        console.log("componentWillMount");
        this.audioPunch = new Audio('./skywalker_punch_sound_3.mp3');
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
        if (this.props.newState === "newGame-shinda") {
            this.audio = new Audio('./shinda.mp3');
            this.json = jsonshinda;
        } else {
            this.audio = new Audio('./audio.mp3');
            this.json = jsonalecHolowka;
        }
        this.audio.volume = .5;
        this.currentGameState = "mount";
        console.log(this.audio);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
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
        console.log(this.currentGameState);
        if (this.currentGameState === "mount") {
            let isIgorAlive = true;
            this.cat = document.querySelector(".catSit");
            let currentTime = 1800;
            var json = this.json;
            this.audio.play();
            this.currentGameState = "!mount";

            var maxValue = Math.max(...Object.keys(json));

            // this.gameWin(false);
            this.interval = setInterval(function () {
                if (maxValue + 6000 < currentTime) {
                    this.stopAudioAndInterval();
                    this.gameWin(isIgorAlive);
                }
                for (var key in json) {
                    if (key == currentTime) {
                        this.createMouse(json[key]);
                    }
                }
                currentTime += 10;

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
                                isIgorAlive = true;
                            } else {
                                this.stopAudioAndInterval();
                                this.gameOver();
                            }


                        } else {
                            if (element.classList.contains('igor')) { // мертвые игори ничего не делают
                                isIgorAlive = false;
                            }
                        }
                        element.remove();
                    }
                });

            }.bind(this), 10)
        }
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
                if ((mouseTop >= catTop - 35 && mouseTop <= catTop + 35)) {
                    element.classList.add("dead");
                    this.audioPunch.play();
                    setTimeout(function run() {
                        this.audioPunch.pause();
                        this.audioPunch.currentTime = 0;
                    }.bind(this), 100);

                    miss = false;
                }
            })
            miss && this.reduceHealth();
        }
    }

    reduceHealth() {
        this.health = this.health - 1;
        document.querySelector(".health").innerHTML = "у вас осталось " + this.health + " промаха";
        if (this.health === -1) {
            this.stopAudioAndInterval();
            this.gameOver();
        }
    }

    stopAudioAndInterval() {
        this.audioPunch.pause();
        this.audioPunch.srcObj = null;
        this.audio.pause();
        this.audio.srcObj = null;
        this.currentGameState = "mount";
        clearInterval(this.interval);
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
        }, 60);
        setTimeout(function run() {
            el.classList.remove("frame2");
            el.classList.add("frame" + frame);
            frame++;
        }, 120);
        setTimeout(function run() {
            el.classList.remove("frame" + frame);
            el.classList.add("frame0");
        }, 140);
    }


    gameOver() {
        setTimeout(function run() {
            this.props.updateState("gameOver");
        }.bind(this), 200);
    }

    gameWin(isIgorAlive) {
        setTimeout(function run() {
            if (isIgorAlive) {
                this.props.updateState("gameWinIgorAlive");
            } else {
                this.props.updateState("gameWinIgorDead");
            }
        }.bind(this), 200);
    }

    initGame() {
        this.health = 5;
    }

    render() {
        return (
            <div className="gameField">
                <div>
                    <div className="catWrapper"><img src="./KK.png" className="catSit frame0"></img></div>
                    <img src="./2079.webp" className="cheese"></img>
                </div>
                <div className="mouseWrapper">
                    {/* <img src="./98Tz.webp" className="mouse"></img> */}
                </div>
                <div className="health">у вас осталось {this.health} промаха</div>
            </div>
        );
    }
}

export default BrickCatGame;