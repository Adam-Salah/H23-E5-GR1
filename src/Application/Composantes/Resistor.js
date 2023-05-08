import React from "react";
import {ItemTypes} from "../Constantes";
import Composante from "./Composante";

function Resistor({x, y}) {
    return(
        <Composante
            x={x}
            y={y}
            itemType={ItemTypes.RESISTOR}
            image={"./ressources/images/Resistance.png"}
            resistance={50}
        />
    )
}

export default Resistor