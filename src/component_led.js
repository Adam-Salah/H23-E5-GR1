import React from "react";
import {ItemTypes} from "./constantes";
import {useDrag} from "react-dnd";

function Component_led() {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.LED,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    if (!isDragging) {
        return (
            <div ref={drag}>
                💡
            </div>
        )
    }
}

export default Component_led