import './Button.css';

export default function Button({
    children,
    width,
    height,
    onClick,
    type = 'button',
    disabled = false,
}) {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
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