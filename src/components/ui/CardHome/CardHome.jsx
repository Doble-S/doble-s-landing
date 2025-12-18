import './CardHome.css'

export default function CardHome({ icon, title, text }) {
    return (
        <div className="card">
            <span className="card_icon">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}