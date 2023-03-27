import Led from "../components/led.js";
import DndProvider from "../node_modules/react-dnd";
import HTML5Backend from "../node_modules/react-dnd-html5-backend";

function Container() {
    return (React.createElement(
            DndProvider,
            {backend: HTML5Backend},
            null
        )
    )
}

let components = [];
for (let i = 0; i < 10; i++) {
    let key = Math.floor(Math.random() * 1000000);
    components.push(React.createElement(
        Led,
        {key: key},
        null
    ));
}

const sidebar_left = ReactDOM.createRoot(document.getElementById("led"));
sidebar_left.render(components);

const container = ReactDOM.createRoot(document.getElementById("main"));
container.render(React.createElement(
    Container,
    null,
    React.createElement(
        Led,
        null,
        null
    )
    )
);