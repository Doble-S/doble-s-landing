import React from 'react'
import './ServiceCard.css'

export default function ServiceCard({icon, title, text}) {
    return (
        <div className="card_service">
            <span className="card_service_icon">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
