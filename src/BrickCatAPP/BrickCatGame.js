import React from "react";
import json from "./soundConfig.json"


class BrickCatGame extends React.Component {
    constructor(props) {
        super(props);
        this.cat = document.querySelector(".catSit");
        this.currentGameState = "mount";
        this.initGame();
    }


    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.initGame();
        document.removeEventListener('keydown', this.onKeyPressed.bind(this));
        console.log("componentWillUnmount");
    }

    createMouse() {
        let newMouse = document.createElement('img');
        newMouse.src = "./98Tz.webp";
        newMouse.className = "mouse";
        if (document.querySelector(".mouseWrapper")) {
            document.querySelector(".mouseWrapper").prepend(newMouse);
        }
    }

    componentDidMount() {
        this.cat = document.querySelector(".catSit");
        let currentTime = 1800;
        if (this.currentGameState === "mount") {
            var audio = new Audio('./audio.mp3');
            audio.play();
            this.currentGameState = "!mount";
            var maxValue = Math.max(...Object.keys(json));


            let timerId = setInterval(function () {
                console.log(currentTime);
                if (maxValue + 4000 < currentTime) {
                    clearInterval(timerId);
                    audio.pause();
                    this.gameWin();

                }
                for (var key in json) {
                    if (key == currentTime) {
                        this.createMouse();
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
                        if (!element.classList.contains('dead')) {
                            element.remove();
                            audio.pause();
                            clearInterval(timerId);
                            this.gameOver();

                        } else {
                            element.remove();
                        }
                    }
                });

            }.bind(this), 10)
        }

    }


    onKeyPressed(e) {
        console.log("onKeyPressed");
        if (document.querySelector(".catSit")) {
            document.querySelector(".catSit").classList.add("animate");
            this.animateCat();
            // плющит
            let catTop = parseInt(window.getComputedStyle(document.querySelector(".catWrapper")).getPropertyValue("left"));
            let mouseTop;
            let miss = true;
            document.querySelectorAll(".mouse").forEach(element => {
                mouseTop = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
                if ((mouseTop >= catTop - 35 && mouseTop <= catTop + 35)) {
                    element.classList.add("dead");
                    miss = false;
                }
            })
            // miss && this.reduceHealth();
        }
    }

    reduceHealth() {
        this.health = this.health - 1;
        document.querySelector(".health").innerHTML = "у вас осталось " + this.health + " промаха";
        if (this.health === 0) {
            // this.gameOver();
        }
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
        this.props.updateState("gameOver");
    }

    gameWin() {
        this.props.updateState("gameWin");
    }

    initGame() {
        this.health = 5;
        document.addEventListener('keydown', this.onKeyPressed.bind(this));
    }

    render() {
        return (
            <div className="gameField" onMouseDown={(e) => this.onKeyPressed(e)}>
                <div>
                    <div className="catWrapper"><img src="./KK.png" className="catSit frame0"></img></div>
                    <img src="./2079.webp" className="cheese"></img>
                </div>
                <div className="mouseWrapper">
                    {/* <img src="./98Tz.webp" className="mouse"></img> */}
                </div>
                {/* <div className="health">у вас осталось {this.health} промаха</div> */}
            </div>
        );
    }
}

export default BrickCatGame;