import Component_led from "./component_led.js";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ReactDOM from "react-dom/client";
import React, {useState} from "react";
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

const container = ReactDOM.createRoot(document.getElementById("main"));
container.render(<Container/>);

function SideBar() {
    let id = React.useId;
    return (
        <div className={'sidebar-left'}>
            <Component_led key={id} id={id}/>
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
    const [type, setType] = useState()
    const [{isOver, didDrop}, drop] = useDrop(
        () => ({
            accept: ItemTypes.LED,
            drop: (item,) => setType(item.itemType),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                didDrop: monitor.didDrop(),
            })
        })
    )

    let color
    if (isOver) {
        color = "yellow"
    } else if (didDrop) {
        color = "blue"
    }

    let component
    switch (type) {
        case "led": component = <Component_led key={React.useId} id={id + ";child"}/>
            break;
    }

    return (
        <div ref={drop} className={'case'} id={id} data-x={x} data-y={y} style={{backgroundColor: color}}>
            {component}
        </div>
    )
}