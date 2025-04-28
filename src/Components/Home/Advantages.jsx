import React from 'react'
import './Advantages.css'

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages-container">
                <h2 className="advantages-title">Преимущества</h2>
                <div className="advantages-grid">
                    <div className="advantage-card">
                        <div className="advantage-image">
                            <img src="/advantage1.png" alt="100% защита средств" />
                        </div>
                        <h3 className="advantage-title">100% защита средств</h3>
                    </div>
                    <div className="advantage-card">
                        <div className="advantage-image">
                            <img src="/advantage2.png" alt="Прозрачные условия сделки" />
                        </div>
                        <h3 className="advantage-title">Прозрачные условия сделки</h3>
                    </div>
                    <div className="advantage-card">
                        <div className="advantage-image">
                            <img src="/advantage3.png" alt="Интеграция с государственным реестром недвижимости" />
                        </div>
                        <h3 className="advantage-title">Интеграция с государственным реестром недвижимости</h3>
                    </div>
                    <div className="advantage-card">
                        <div className="advantage-image">
                            <img src="/advantage4.png" alt="Отслеживание всех этапов сделки онлайн" />
                        </div>
                        <h3 className="advantage-title">Отслеживание всех этапов сделки онлайн</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
