import React from "react";
import json from "./soundConfig.json"


class BrickCatGame extends React.Component {
    constructor(props) {
        super(props);
        this.cat = document.querySelector(".catSit");
        this.currentGameState = "mount";
    }


    componentDidUpdate() {
        // console.log(this.state)
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
        console.log("componentDidMount");
        this.cat = document.querySelector(".catSit");
        let currentTime = 0;
        document.addEventListener('keydown', this.onKeyPressed.bind(this));
        if (this.currentGameState === "mount") {
            var audio = new Audio('./05.Ultramarines Chant.mp3');
            audio.play();
            this.currentGameState = "!mount";
            var maxValue = Math.max(...Object.keys(json));


            let timerId = setInterval(function () {
                if (maxValue + 3500 < currentTime) {
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
                    catTop = parseInt(window.getComputedStyle(document.querySelector(".catSit")).getPropertyValue("left"));
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
        if (document.querySelector(".catSit")) {
            document.querySelector(".catSit").classList.add("animate");
            setTimeout(this.removeAnimate.bind(this), 300);
            // плющит
            let catTop = parseInt(window.getComputedStyle(document.querySelector(".catSit")).getPropertyValue("left"));
            let mouseTop;
            document.querySelectorAll(".mouse").forEach(element => {
                mouseTop = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
                if ((mouseTop >= catTop - 35 && mouseTop <= catTop + 35)) {
                    element.classList.add("dead");
                }
            })
        }

    }

    removeAnimate() {
        document.querySelector(".catSit") && document.querySelector(".catSit").classList.remove("animate");
    }

    gameOver() {
        this.props.updateState("gameOver");
    }
    gameWin() {
        this.props.updateState("gameWin");
    }


    render() {
        return (
            <div className="gameField" onMouseDown={(e) => this.onKeyPressed(e)}>
                <div>
                    <img src="./6B3neVPrT3s.jpg" className="catSit"></img>
                    <img src="./2079.webp" className="cheese"></img>
                </div>
                <div className="mouseWrapper">
                    {/* <img src="./98Tz.webp" className="mouse"></img> */}
                </div>

            </div>
        );
    }
}

export default BrickCatGame;