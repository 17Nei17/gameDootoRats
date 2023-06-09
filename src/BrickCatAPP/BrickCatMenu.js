import React from "react";



class BrickCatMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate() {

    }


    newGameInit(newState) {
        this.props.updateState(newState);
    }

   
    render() {
        if (window.innerWidth < 1200) {
            return (<div className="menuWrapper"><div>Ваше устройство не поддерживает игру.</div></div>)
        } else {
            return (
                <div>
                    <div className="menuWrapper" >
                        <div className="menuHeader">Помоги Кирпекоту победить!!!</div>
                        <div className="menuContent">
                            <div>не позволь дутокрысам создать ядерную бомбу</div>
                            <div>ВНИМАНИЕ! ОЧЕНЬ РЕЗКИЙ ЗВУК!</div>
                            <div className="flex-column center">
                                <div className="columt-element">
                                    <button onClick={() => this.newGameInit("newGame-everlasting")} className="button">Легчайшая летняя прогулка, однако может вызвать слезы у тех кто старше 18 лет</button>
                                </div>
                                <div className="columt-element">
                                    <button onClick={() => this.newGameInit("newGame-shinda")} className="button">Короткая, но сложная и извилистая дорога</button>
                                </div>
                                <div className="columt-element">
                                    <button onClick={() => this.newGameInit("newGame-alecHolowka")} className="button">Долгий и затяжной бой с Дутокрысами, но не сильно сложный</button>
                                </div>
                                <div className="columt-element">
                                    <button onClick={() => this.newGameInit("newGame-harfest")} className="button">Парад страданий</button>
                                </div>
                                <div className="columt-element">
                                    <button onClick={() => this.newGameInit("newGame-harfest-safe")} className="button green">Парад страданий (версия без смертей для теста)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq">
                        <button onClick={() => this.newGameInit("faq")} className="button">об игре</button>
                    </div>
                </div>
            );
        }

    }
}

export default BrickCatMenu;