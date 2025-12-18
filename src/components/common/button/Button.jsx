import './Button.css';

export default function Button({
    children,
    width,
    height,
    onClick,
    type = 'button',
}) {
    return (
        <button
        type={type}
        onClick={onClick}
        className="btn-primary"
        style={{
            width,
            height,
        }}
        >
        {children}
        </button>
    )
}