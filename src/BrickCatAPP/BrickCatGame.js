import React from "react";
import jsonshinda from "./shinda.json"
import jsonalecHolowka from "./alecHolowka.json"
import jsonEverlasting from "./everlasting.json"
import jsonHarfest from "./jsonHarfest.json"
import { Howl, Howler } from 'howler';



class BrickCatGame extends React.Component {
    constructor(props) {
        super(props);
        this.cat = document.querySelector(".catSit");
        this.lastKey = 0;
        this.state = {
            counter: 1000,
            health: 5,
            intervalId: null,
            startGame: false,
            persent: 0
        };
    }


    componentWillMount() {
        console.log(this.props.newState)
        this.audioPunch = new Howl({
            src: [this.props.skywalker_punch_sound_3Song]
        });;
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
        if (this.props.newState === "newGame-shinda") {
            // this.start = new Date().getTime() - 1450; // аниме опенинг
            var sound = new Howl({
                src: [this.props.shindaSong]
            });
            this.json = jsonshinda;
            this.isIgorAlive = false;
        } else if (this.props.newState === 'newGame-everlasting') {
            // this.start = new Date().getTime() - 1610; // бесконечное лето
            var sound = new Howl({
                src: [this.props.everlasting_SummerSong],
            });
            this.json = jsonEverlasting;
            this.isIgorAlive = false;

        } else if (this.props.newState === 'newGame-harfest' || this.props.newState === "newGame-harfest-safe") {
            // this.start = new Date().getTime() - 1610; // harfest
            var sound = new Howl({
                src: [this.props.harfest],
            });
            this.json = jsonHarfest;
            this.isIgorAlive = false;
        }
        else {
            // this.start = new Date().getTime() - 1300; // ночь в лесу
            var sound = new Howl({
                src: [this.props.alecHolowkaSong]
            });
            this.json = jsonalecHolowka;
            this.isIgorAlive = true;
        }
        this.audio = sound;
        sound.on('load', function () {
            this.LoadAudio();
        }.bind(this))
    }

    LoadAudio() {
        console.log(this.props.newState)
        console.log(this.props.newState === "newGame-harfest" || "newGame-harfest-safe")
        this.start = new Date().getTime() - 1800;
        const intervalId = setInterval(() => {
            this.setState(prevState => ({ counter: Math.round((this.end - this.start) * 0.1) * 10 }));
            this.setState({ persent: Math.trunc((this.state.counter * 100) / (this.maxValue + 5000)) });
        }, 5);
        this.setState({ intervalId });
        this.cat = document.querySelector(".catSit");
        var json = this.json;
        this.audio.play();

        this.maxValue = Math.max(...Object.keys(json));
        this.setState({ startGame: true });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
        clearInterval(this.state.intervalId);
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        this.end = new Date().getTime();
        if (this.maxValue + 5000 < this.state.counter) {
            this.stopAudioAndInterval();
            this.gameWin(this.isIgorAlive);
        }
        for (var key in this.json) {
            if (key == this.state.counter) {
                if (this.lastKey != key) {
                    this.createMouse(this.json[key], key);
                }
                this.lastKey = key;
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
                if (!element.classList.contains('dead')) {
                    if (element.classList.contains('igor')) {
                        this.isIgorAlive = true;
                    } else {
                        if (this.props.newState !== "newGame-harfest-safe") {
                            this.stopAudioAndInterval();
                            console.log("cheese")
                            this.gameOver();
                        }

                    }


                } else {
                    if (element.classList.contains('igor')) {
                        this.isIgorAlive = false;
                    }
                }
                element.remove();
            }
        });
    }

    createMouse(ratType, key) {
        let newMouse = document.createElement('img');
        if (ratType === "custom") {
            newMouse.src = this.props.ratImg;
            newMouse.className = "mouse";
        } else if (ratType === "igor") {
            newMouse.src = this.props.IgorImg;
            newMouse.className = "mouse igor";
        } else if (ratType === "ratWoman") {
            newMouse.src = this.props.LenaImg;
            newMouse.className = "mouse ratWoman";
        }
        newMouse.id = key;

        if (document.querySelector(".mouseWrapper")) {
            document.querySelector(".mouseWrapper").prepend(newMouse);
        }
    }

    componentDidMount() {
        // const intervalId = setInterval(() => {
        //     this.setState(prevState => ({ counter: Math.round((this.end - this.start) * 0.1) * 10 }));
        // }, 5);
        // this.setState({ intervalId });
        // this.cat = document.querySelector(".catSit");
        // var json = this.json;
        // this.audio.play();

        // this.maxValue = Math.max(...Object.keys(json));
    }


    onKeyPressed(e) {
        if (document.querySelector(".catSit")) {
            document.querySelector(".catSit").classList.add("animate");
            this.animateCat();
            let catTop = parseInt(window.getComputedStyle(document.querySelector(".catWrapper")).getPropertyValue("left"));
            let mouseTop;
            let miss = true;
            let isKillMouse = false;
            document.querySelectorAll(".mouse").forEach(element => {
                mouseTop = parseInt(window.getComputedStyle(element).getPropertyValue("left"));
                if ((mouseTop >= catTop - 40 && mouseTop <= catTop + 50 && !isKillMouse)) {
                    isKillMouse = true;
                    element.classList.add("dead");
                    this.audioPunch.play();
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
        console.log(this.state.health);
        if (this.state.health <= 0) {
            console.log("lowHP")
            if (this.props.newState !== "newGame-harfest-safe") {
                this.stopAudioAndInterval();
                this.gameOver();
            }
        }
    }

    stopAudioAndInterval() {
        Howler.unload();
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
        if (!this.state.startGame) {
            return <div className="menuWrapper">Загружается музыка...</div>
        }
        return (
            // 
            <div className={this.props.newState + ' gameField'}>
                <div>
                    <div className="catWrapper"><img src={this.props.catImg} className="catSit frame0"></img></div>
                    <img src={this.props.cheese} className="cheese"></img>
                </div>
                <div className="mouseWrapper">
                    {/* <img src={LenaImg} className="ratWoman mouse"></img> */}
                </div>
                <div className="health">у вас осталось {this.state.health === 5 ? ' 5 промахов' : this.state.health + ' промаха'}</div>

                <p>Counter: {this.state.counter} ms</p>
                <div className="progressbar">
                    <span style={{ width: this.state.persent + "%" }}></span>
                </div>
            </div>

        );
    }

}

export default BrickCatGame;