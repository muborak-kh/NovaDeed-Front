import React from 'react'
import './ForWhom.css'

const ForWhom = () => {
    return (
        <section className="for-whom">
            <div className="for-whom-container">
                <h2 className="for-whom-title">Для кого наша система</h2>
                <div className="for-whom-grid">
                    <div className="for-whom-card">
                        <div className="card-image">
                            <img src="/for-whom1.png" alt="Покупателям недвижимости" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Покупателям недвижимости</h3>
                            <ul className="card-features">
                                <li>Прозрачность сделки</li>
                                <li>Надежность и безопасность</li>
                            </ul>
                        </div>
                    </div>
                    <div className="for-whom-card">
                        <div className="card-image">
                            <img src="/for-whom2.png" alt="Застройщикам" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Застройщикам</h3>
                            <ul className="card-features">
                                <li>Гарантированные сделки</li>
                                <li>Автоматизация процесса</li>
                            </ul>
                        </div>
                    </div>
                    <div className="for-whom-card">
                        <div className="card-image">
                            <img src="/for-whom3.png" alt="Агентствам недвижимости" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Агентствам недвижимости</h3>
                            <ul className="card-features">
                                <li>Упрощение сделок</li>
                                <li>Повышение репутации</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForWhom
