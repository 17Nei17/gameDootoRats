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
        return (
            <div>
                <div className="menuWrapper" >
                    <div className="menuHeader">Помоги Кирпекоту победить!!!</div>
                    <div className="menuContent">
                        <div>не позволь дутокрысам создать ядерную бомбу</div>
                        <div>ВНИМАНИЕ! ОЧЕНЬ РЕЗКИЙ ЗВУК!</div>
                        <button onClick={() => this.newGameInit("newGame")} className="button">Начать уничтожение дутокрыс</button>
                    </div>
                </div>
                <div className="faq">
                    <button onClick={() => this.newGameInit("faq")} className="button">об игре</button>
                </div>
            </div>
        );
    }
}

export default BrickCatMenu;