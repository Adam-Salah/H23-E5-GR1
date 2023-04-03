import React from "react";
import {useDrag} from "react-dnd";
import {ItemTypes} from "./constantes";

function Component_led(key) {
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.LED,
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    if (!isDragging) {
        return (
            <div key={key} ref={drag} className={'led'}>
                💡
            </div>)
    }
}

export default Component_led