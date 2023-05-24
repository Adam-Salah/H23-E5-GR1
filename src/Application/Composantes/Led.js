import React from "react";
import {ItemTypes} from "../Constantes";
import Composante from "./Composante";

/**
 * Affiche une Led
 */
function Led({x, y}) {
    return(
        <Composante
            x={x}
            y={y}
            itemType={ItemTypes.LED}
            image={"./ressources/icons/sun.svg"}
        />
    )
}

export default Led