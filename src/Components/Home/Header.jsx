import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logoWhite from '../../assets/logo.svg'
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <div className="logo-icon" onClick={() => navigate("/", { replace: false })}>
                        <img src={logoWhite} alt="NovaDeed" />
                    </div>
                </div>

                <button
                    className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {isHomePage && (
                    <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#" className="nav-link">Почему мы?</a>
                        <a href="#" className="nav-link">Как это работает</a>
                        <a href="#" className="nav-link">Преимущества</a>
                    </nav>
                )}

                <div className="header-actions">
                    <div className="language-selector">
                        <span>EN</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#10192C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="auth-buttons">
                        <button className="btn-login">Войти</button>
                        <button className="btn-register">Регистрация</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
