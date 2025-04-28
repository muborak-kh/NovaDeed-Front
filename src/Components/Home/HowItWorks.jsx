import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="how-it-works-container">
                <h2 className="how-it-works-title">Как это работает?</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-image">
                            <img src="/step1.png" alt="Выбор объекта недвижимости"/>
                        </div>
                        <h3 className="step-title">Выбор объекта недвижимости</h3>
                    </div>
                    <div className="step">
                        <div className="step-image">
                            <img src="/step2.png" alt="Смарт-контракт с условиями сделки"/>
                        </div>
                        <h3 className="step-title">Смарт-контракт с условиями сделки</h3>
                    </div>
                    <div className="step">
                        <div className="step-image">
                            <img src="/step3.png" alt="Безопасная оплата через блокчейн"/>
                        </div>
                        <h3 className="step-title">Безопасная оплата через блокчейн</h3>
                    </div>
                    <div className="step">
                        <div className="step-image">
                            <img src="/step4.png" alt="Передача права собственности"/>
                        </div>
                        <h3 className="step-title">Передача права собственности</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
