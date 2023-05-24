import React from "react";
import {ItemTypes} from "../Constantes";
import Composante from "./Composante";

/**
 * Affiche une source
 */
function Source({x, y}) {
    return(
        <Composante
            x={x}
            y={y}
            itemType={ItemTypes.SOURCE}
            image={"./ressources/icons/battery.svg"}
            resistance={100}
        />
    )
}

export default Source