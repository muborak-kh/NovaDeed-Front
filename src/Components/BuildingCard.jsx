import React from 'react'
import './BuildingCard.css'
import { useNavigate } from 'react-router-dom'

const BuildingCard = ({ id, name, location, builder }) => {

    const navigate = useNavigate()

    return (
        <div className="building-card">
            <div className="building-image">
                <img src={"https://www.gazeta.uz/media/img/2020/10/m8VhD916031103938242_b.jpg"} alt={name} />
                {/* <span className="building-tag">{tag}</span> */}
            </div>
            <div className="building-info">
                <div className="building-header">
                    <h3 className="building-title">{name}</h3>
                    <p className="building-location">{location}</p>
                    <p className="building-developer">{builder.name}</p>
                </div>
                <div onClick={() => navigate(`/project/${id}`, { replace: false })} className="btn-details">Подробнее</div>
            </div>
        </div>
    )
}

export default BuildingCard
