import {useDrop} from "react-dnd";
import {ItemTypes} from "./Constantes";
import Led from "./Composantes/Led";
import React, {useState} from "react";

function Case({id, x, y}) {

    const [type, setType] = useState()
    const [{isOver, didDrop}, drop] = useDrop(
        () => ({
            accept: ItemTypes.LED,
            drop: (item,) => setType(item.itemType),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                didDrop: monitor.didDrop()
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
        case "led": component = <Led key={React.useId}/>
            break;
        case undefined: component = null
            break;
    }

    return (
        <div ref={drop} className={'case'} id={id} data-x={x} data-y={y} style={{backgroundColor: color}}>
            {component}
        </div>
    )
}

export default Case