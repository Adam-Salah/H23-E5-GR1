import React from "react";
import {ItemTypes} from "../Constantes";
import Composante from "./Composante";

function Source({x, y}) {
    return(
        <Composante
            x={x}
            y={y}
            itemType={ItemTypes.SOURCE}
            image={"./ressources/images/Source.png"}
            resistance={100}
        />
    )
}

export default Source