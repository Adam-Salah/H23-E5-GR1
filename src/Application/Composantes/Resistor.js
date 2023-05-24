import React from "react";
import {ItemTypes} from "../Constantes";
import Composante from "./Composante";

/**
 * Affiche une résistance
 */
function Resistor({x, y}) {
    return(
        <Composante
            x={x}
            y={y}
            itemType={ItemTypes.RESISTOR}
            image={"./ressources/icons/git-commit.svg"}
            resistance={50}
        />
    )
}

export default Resistor