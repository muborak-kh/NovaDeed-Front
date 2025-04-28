import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
    return (
        <div className="col-md-4 col-xl-2 bg-light">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link
                        className="nav-link d-flex align-items-center gap-2 active"
                        to={{
                            pathname: "/crm"
                        }}
                    >
                        Панель управления
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link d-flex align-items-center gap-2"
                        to={{
                            pathname: "/crm/objects"
                        }}
                    >
                        Мои объекты
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link d-flex align-items-center gap-2"
                        to={{
                            pathname: "/crm/contracts"
                        }}    
                    >
                        Сделки
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigator
