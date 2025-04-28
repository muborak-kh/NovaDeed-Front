import React from 'react'
import './WhyUs.css'

const WhyUs = () => {
    return (
        <section className="why-us">
            <div className="why-us-container">
                <h2 className="why-us-title">Почему мы?</h2>
                <div className="why-us-cards">
                    <div className="why-us-card">
                        <span className="card-label">Проблема</span>
                        <p className="card-text">
                            Покупка недвижимости часто сопряжена с рисками: скрытые условия, потеря денег, недобросовестные застройщики
                        </p>
                    </div>
                    <div className="why-us-card">
                        <span className="card-label">Решение</span>
                        <p className="card-text">
                            Наша платформа фиксирует все условия сделки в блокчейне. Никаких сюрпризов — только прозрачность и безопасность
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
