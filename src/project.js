import Component_led from "./component_led.js";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ReactDOM from "react-dom/client";
import React from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "./constantes";

function Container() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Grid/>
            <SideBar/>
        </DndProvider>
    )
}

function SideBar() {
    let id = React.useId;
    return (
        <div className={'sidebar-left'}>
            <div className={'led'}>
                <Component_led key={id} id={id}/>
            </div>
        </div>
    )
}

function Grid() {

    let cases = new Array(10)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let id = j.toString().concat(";", i.toString());
            cases.push(<Case key={id} id={id} x={j} y={i}/>)
        }
    }

    return (
        <ul className={'grid'}>{cases}</ul>
    )
}

function Case({id, x, y}) {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.LED,
            drop: () => moveComponent(x, y),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        }), [x,y]
    )

    let color
    if (isOver) {
        color = "yellow"
    } else
        color = "grey"

    return (
        <div ref={drop} className={'case'} id={id} data-x={x} data-y={y} style={{backgroundColor: color}}>
        </div>
    )
}

function moveComponent(x, y) {
    const drop = ReactDOM.createRoot(document.getElementById(x + ';' + y));
    drop.render( <Component_led key={React.useId}/>);
    console.log("drop");
}

const container = ReactDOM.createRoot(document.getElementById("main"));
container.render(<Container/>);