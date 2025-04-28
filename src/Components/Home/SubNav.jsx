import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SubNav.css'

const SubNav = () => {

    const location = useLocation()
    const isHomePage = location.pathname === '/'

    if (isHomePage) {
        return null
    }

    return (
        <nav className="sub-nav">
            <div className="sub-nav-container">
                <div className="sub-nav-links">
                    <Link to="/buildings" className="sub-nav-link">Новойстройки</Link>
                    <Link to="/map" className="sub-nav-link">Карта</Link>
                    <Link to="/apartments" className="sub-nav-link">Квартиры</Link>
                    <Link to="/journal" className="sub-nav-link">Журнал</Link>
                    <Link to="/mortgage-calculator" className="sub-nav-link">Ипотечный калькулятор</Link>
                </div>
            </div>
        </nav>
    )
}

export default SubNav
