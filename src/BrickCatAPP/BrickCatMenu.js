import React from "react";



class BrickCatMenu extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate() {
       
    }
  

    newGameInit(){
        this.props.updateState("newGame");
    }


    render() {
        return (
                <div className="menuWrapper" >
                    <div className="menuHeader">Помоги Кирпекоту победить!!!</div>
                    <div className="menuContent">
                        <div>не позволь дутокрысам создать ядерную ракету</div>
                        <div>ВНИМАНИЕ! ОЧЕНЬ РЕЗКИЙ ЗВУК!</div>
                        <button onClick={() => this.newGameInit()} className="button">Начать уничтожение дутокрыс</button>
                    </div>
                </div>
        );
    }
}

export default BrickCatMenu;