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
                        <div className="menuHeader">Количество промахов сверху игрового поля указывает сколько раз можно ударить лапой вне Дутокрысы. Однако ни одна Дутокрыса не должна попасть к сыру, это приведет к поражению Кирпекота.</div>
                    </div>
                </div>
                <div className="menuHeaderBig">Конспирология</div>
                <div className="flex-column">
                    <div className="flex-row ">
                        <div className="menuHeader">
                            <div className="header red">Дутокрысы намерены перезапустить вселенную Catwar!</div>
                            <div className="p">
                                Мало кто знает о существовании секретных лабораторий дутокрыс, находящихся в оазисах 7ДЛ. Однако можно точно сказать, что там ставили опыты над живыми кирпекотами и дутокрысами-предателями, как либо поддерживающими кирпекотов. Скорее всего, именно предатели смогли раздобыть и передать сведения об третьем секретном ингредиенте.
                            </div>
                            <div className="p">
                                Остается открытым вопрос, откуда у дутокрыс столько материалов для создания ядерной бомбы?
                            </div>
                            <div className="p">
                                Ведь прелесть и семицвет довольно редкие уникалки, сложные для добычи. Но, возможно дутокрысы заключили договор с Сиянием, сильно разочарованной в варе, и она производит постоянную поставку им уникалок.
                            </div>
                            <div className="p">
                                Может показани дутокрыс, начавшийся в 2019, когда лентокоты пошли в оазис и нагло уничтожили некоторые жилища дутокрыс. Думаю и так ясно, что ситуация в дальнейшем начала усуглублятся, и через несколько лет популяция дутокрыс снизилась в несколько раз, так, что многие начали считать, что дутокрысы вообще полностью вымерли.
                            </div>
                            <div className="p">
                               Что только с ними не делали до этого: готовили, тыкали белыми стрелками и множество других ужасных вещей. Теперь их лидер желает мести и нормальной жизни своим детям, которую возможно они уже не смогут получить. Изначально дутокрысам было наплевать на то, что их место заняли кирпекоты. Но, поскольку кирпекоты начали препяствовать дутокрысам и даже в крайних случаях убивать их, у них в итоге сложились крайне негативные взаимоотношения.
                            </div>
                            <div className="p">
                                На данный момент важно лишь одно. Дутокрысы уже готовы к созданию ядерной бомбы. И это необходимо остановить.
                            </div>
                            <div className="p">
                                Сейчас единственное что их задерживает - это кирпекоты: они украли рецепт ядерной бомбы и спрятали у себя секретный третий ингредиент — <span className="red">сыр</span>.
                            </div>
                            <div className="p">
                                Пока дутокрысам не достаёт важного компонента, Catwar в безопасности. Но они не остановятся, пока не заполучат третий ингредиент... Дутокрысы до последнего желают создать новый мир посредством уничтожения старого. Но кирпекоты этого не допустят!
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