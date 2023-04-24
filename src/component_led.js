import React from "react";
import {ItemTypes} from "./constantes";
import {useDrag} from "react-dnd";

function Component_led(props) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.LED,
        item: {itemType: ItemTypes.LED},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    if (!isDragging) {
        return (
            <div className={'led'} id={props.id.toString()}>
                <div ref={drag}>
                    💡
                </div>
            </div>
        )
    }
}

export default Component_led