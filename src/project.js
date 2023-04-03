import Component_led from "./component_led.js";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

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
        Component_led,
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
        Component_led,
        null,
        null
    )
    )
);