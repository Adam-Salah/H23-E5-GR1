import React from "react";
import {ItemTypes} from "../Constantes";
import Composante from "./Composante";

function Led({x, y}) {
    return(
        <Composante
            x={x}
            y={y}
            itemType={ItemTypes.LED}
            image={"./ressources/images/Led.png"}
        />
    )
}

export default Led