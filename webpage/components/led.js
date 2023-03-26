export default function Led(key) {
    return (
        React.createElement(
            "div",
            {className : "led", key : key},
            "💡"
        )
    )
}