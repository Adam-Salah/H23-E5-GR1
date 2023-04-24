import React from "react";
import {ItemTypes} from "../Constantes";
import {useDrag} from "react-dnd";

function Led() {
    let id = React.useId();
    let dropState = false;
    const [{isDragging, didDrop}, drag] = useDrag(() => ({
        type: ItemTypes.LED,
        item: {itemType: ItemTypes.LED},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
            didDrop: monitor.didDrop()
        })
    }))

    if (didDrop === true) {
        dropState = true
    }

    if (!isDragging) {
        return (
            <div className={'led'} id={id} data-dropstate={dropState}>
                <div ref={drag}>
                    💡
                </div>
            </div>
        )
    }
}

export default Led