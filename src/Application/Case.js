import React from "react";
import {useDrop} from "react-dnd";
import {ItemTypes} from "./Constantes";
import Led from "./Composantes/Led.js";

function Case({x, y, type, pushComponent, removeComponent}) {

    let id = x.toString().concat(';', y.toString())

    const [{isOver, didDrop}, drop] = useDrop(
        () => ({
            accept: ItemTypes.LED,
            drop: (item,) => newComponent(item.itemType, item.itemId),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                didDrop: monitor.didDrop()
            })
        })
    )

    function newComponent(itemType, itemId) {
        if(pushComponent(x, y, itemType)) {
            removeComponent(itemId)
        }
    }

    let component
    switch (type) {
        case "Led": component = <Led key={React.useId} x={x} y={y} />
            break;
        case undefined: component = null
            break;
    }

    let color
    if (isOver) {
        color = "yellow"
    } else if (didDrop) {
        color = "blue"
    }

    return (
        <div ref={drop} className={'case'} id={id} style={{backgroundColor: color}}>
            {component}
        </div>
    )
}

export default Case