import React from "react";
import './index.css';
import brickCat from "./kot.webp"
import dutoRat from "./98Tz.webp"
import cheese from "./2079.webp"
import niceRat from "./1583754356_bliny-13.jpg"


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
            <div className="menuWrapper faqWrapper">
                <div className="menuHeaderBig">Авторы</div>
                <div className="flex-column">
                    <div className="columt-element">
                        <a target="_blank" className="menuHeader" href="https://catwar.su/cat350676">Рываыфывафпрывларфвыа</a> - создатель кирпекотов, рисовал кирпекота.
                    </div>
                    <div className="columt-element">
                        <a target="_blank" className="menuHeader" href="https://catwar.su/cat677916">Лайм</a> - идея сюжета взята из его комиксов.
                    </div>
                    <div className="columt-element">
                        <a target="_blank" className="menuHeader" href="https://catwar.su/cat1432518">Озарённолапочка</a> - идея игры, код, стили .
                    </div>
                    <div className="columt-element">
                        <a className="menuHeader" >ephemeralCode</a> - заставлял крыс появляться на экране вовремя.
                    </div>
                    <div className="columt-element">
                        <a className="menuHeader" >Умка</a> - рисовал одежду дутокрысам.
                    </div>
                </div>
                <div className="menuHeaderBig">Действующие лица</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">Кирпекот (не понимает что происходит, но умеет выбивать такт своими лапками)</div>
                        <img className="img-about" src={brickCat}></img>
                    </div>
                    <div className="flex-row reverse">
                        <div className="menuHeader">Дутокрысы (бегут - некоторые к сыру, некоторые на свидание, а некоторые по важным делам)</div>
                        <img className="img-about" src={dutoRat}></img>
                    </div>
                    <div className="flex-row ">
                        <div className="menuHeader">Плющекрысы (временно перешедшие в 2д версию Дутокрысы, все еще бегут, но забыли зачем)</div>
                        <img className="img-about dead" src={dutoRat}></img>
                    </div>
                    <div className="flex-row reverse">
                        <div className="menuHeader">Сыр (лежит)</div>
                        <img className="img-about" src={cheese}></img>
                    </div>
                </div>
                <div className="menuHeaderBig">Управление</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">Нажимайте любую кнопку чтобы Кирпекот ударил лапой (кроме кнопки выключения компьютера и кнопок на мониторе и мышке)</div>
                    </div>
                    <div className="flex-row ">
                        <div className="menuHeader">Количество промахов сверху игрового поля указывает сколько раз можно ударить лапой вне Дутомыши. Однако ни одна Дутомышь не должна попасть к сыру, это приведет к поражению Кирпекота.</div>
                    </div>
                </div>
                <div className="menuHeaderBig">Конспирология</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">
                            <div className="header red">Дутокрысы намерены перезапустить вселенную Catwar!</div>
                            <div className="p">
                                Чтобы это сделать, им необходимо создать атомную бомбу и активировать её, но у них возникла проблема: кирпекоты украли рецепт ядерной бомбы и спрятали у себя секретный третий ингредиент — <span className="red">сыр</span>.
                            </div>
                            <div className="p">
                                Пока дутокрысам не достаёт важного компонента, Catwar в безопасности. Но они не остановятся, пока не заполучат третий ингредиент... Дутокрысы до последнего желают создать новый мир посредством уничтожения старого. Но кирпекоты этого не допустят!
                            </div>
                            <div className="p">
                                Вы — кирпекот, которому поручено охранять сыр от стаи дутокрыс. Ни в коем случае нельзя допустить заполучение ингредиента врагом, иначе гибели не избежать!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menuHeaderBig">Плющекрысы</div>
                <div className="flex-row reverse">
                    <div className="menuHeader">В процессе игры ни одна Дутокрыса не пострадала. Состояние блинчика для них является нормальной формой.</div>
                    <img className="img-about blin" src={niceRat}></img>
                </div>
                <div className="menuHeaderBig">Ссылка на музыку:</div>
                <div className="flex-column">
                    <div className="columt-element">
                        <a target="_blank" className="menuHeader" href="https://www.youtube.com/watch?v=o2UUFFMGcgY">Die Anywhere Else</a>
                    </div>
                    <div className="columt-element">
                        <a target="_blank" className="menuHeader" href="https://www.youtube.com/watch?v=P_nNo-J7hok">The Legendary Hero is Dead!</a>
                    </div>
                    <div className="columt-element">
                        <a target="_blank" className="menuHeader" href="https://www.youtube.com/watch?v=Xc5o7DyI0-4">Everlasting Summer</a>
                    </div>
                </div>
                <button onClick={() => this.returnToMenu()} className="button">Вернуться в начало</button>
            </div>
        )
    }
}

export default BrickCatGameFaq;