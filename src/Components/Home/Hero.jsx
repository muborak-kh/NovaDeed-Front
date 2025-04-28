import React from 'react'
import './Hero.css'
import { useTonWallet } from '@tonconnect/ui-react'
import { useNavigate } from 'react-router-dom'

const Hero = (props) => {
    
    const wallet = useTonWallet()
    const navigate = useNavigate()

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Блокчейн для безопасной недвижимости
                    </h1>
                    <p className="hero-description">
                        Прозрачные сделки между застройщиками и покупателями без посредников и рисков
                    </p>
                    <button className="hero-button" onClick={() => wallet === null ? props.connectWallet() : navigate("/projects", { replace: false })}>
                        Подключиться к системе
                    </button>
                </div>
                <div className="hero-image">
                    <img src="/hero-image.png" alt="Hero illustration" />
                </div>
            </div>
        </section>
    )
}

export default Hero
