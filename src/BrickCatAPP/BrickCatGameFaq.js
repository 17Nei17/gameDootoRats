import React from "react";
import './index.css';

class BrickCatGameFaq extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    returnToMenu() {
        this.props.updateState("menuPage");
    }

    render() {
        return (
            <div className="menuWrapper">
                <div className="menuHeaderBig">Авторы</div>
                <div className="flex-column">
                    <div>
                        <a className="menuHeader" href="https://catwar.su/cat350676">Рываыфывафпрывларфвыа</a> - создатель кирпекотов
                    </div>
                    <div>
                        <a className="menuHeader" href="https://catwar.su/cat1432518">Озарённолапочка</a> - идея, код, стили и хостинг
                    </div>
                    <div>
                        <a className="menuHeader" >ephemeralCode</a> - заставлял крыс появляться на экране вовремя
                    </div>
                </div>
                <div className="menuHeaderBig">Действующие лица</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">Кирпекот</div>
                        <img className="img-about" src="./kot.webp"></img>
                    </div>
                    <div className="flex-row reverse">
                        <div className="menuHeader">Дутокрысы</div>
                        <img className="img-about" src="./98Tz.webp"></img>
                    </div>
                    <div className="flex-row ">
                        <div className="menuHeader">Сыр</div>
                        <img className="img-about" src="./2079.webp"></img>
                    </div>
                </div>
                <div className="menuHeaderBig">Управление</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">Нажимайте любую кнопку чтобы Кирпекот ударил лапой (кроме кнопки выключения компьютера и кнопок на мониторе и мышке)</div>
                    </div>
                </div>
                <div className="menuHeaderBig">Конспирология</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">Тут должен быть текст который пояснит что вообще происходит, зачем крысам сыр. Почему 2д крысы(плоские) не могут взять 3д сыр и тд</div>
                    </div>
                </div>

                <button onClick={() => this.returnToMenu()} className="button">Вернуться в начало</button>
            </div>
        )
    }
}

export default BrickCatGameFaq;