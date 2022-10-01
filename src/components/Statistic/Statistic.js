import React from 'react'
import './Statistic.scss'

function Statistic() {
    const [active, setActive] = React.useState(1)

    function handleActive(index) {
        setActive(index)
    }
    return (
        <div className='__container'>
            <div className="statistic">
                <div className="tabs">
                    <p className='tabs__label'>пользователей за:</p>
                    <div className="tabs__list">
                        <div className={`tabs__tab ${active === 1 ? "tabs__active" : ""}`} onClick={() => handleActive(1)}>день</div>
                        <div className={`tabs__tab ${active === 2 ? "tabs__active" : ""}`} onClick={() => handleActive(2)}>неделю</div>
                        <div className={`tabs__tab ${active === 3 ? "tabs__active" : ""}`} onClick={() => handleActive(3)}>месяц</div>
                        <div className={`tabs__tab ${active === 4 ? "tabs__active" : ""}`} onClick={() => handleActive(4)}>квартал</div>
                        <div className={`tabs__tab ${active === 5 ? "tabs__active" : ""}`} onClick={() => handleActive(5)}>год</div>
                    </div>
                </div>
                <div className="content-tabs">
                    <div className={`content ${active === 1 ? "content__active" : ""}`}>
                        Пользователей за день: 107
                    </div>
                    <div className={`content ${active === 2 ? "content__active" : ""}`}>
                        Пользователей за неделю: 107
                    </div>
                    <div className={`content ${active === 3 ? "content__active" : ""}`}>
                        Пользователей за месяц: 107
                    </div>
                    <div className={`content ${active === 4 ? "content__active" : ""}`}>
                        Пользователей за квартал: 107
                    </div>
                    <div className={`content ${active === 5 ? "content__active" : ""}`}>
                        Пользователей за год: 107
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic