import Component_led from "./component_led.js";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ReactDOM from "react-dom/client";
import React from "react";

function Container() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Component_led/>
            <Grid/>
        </DndProvider>
    )
}

function Grid() {
    return (
        <div className={'grid'}>
        </div>
    )
}

let components = [];
for (let i = 0; i < 10; i++) {
    let key = Math.floor(Math.random() * 1000000);
    components.push(<Component_led key={key}/>)
}

const sidebar_left = ReactDOM.createRoot(document.getElementById("led"));
sidebar_left.render(components);

const container = ReactDOM.createRoot(document.getElementById("main"));
container.render(<Container/>);