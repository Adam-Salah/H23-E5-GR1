import React from "react";
import Led from "./Composantes/Led";
import Resistor from "./Composantes/Resistor";
import Source from "./Composantes/Source";
import {v4 as uuidv4} from 'uuid';

/**
 * Contient un de chaque composante, utilisables à l'infini
 */
function SideBar() {
    return (
        <div className={'sidebar-left'}>
            <Led key={uuidv4()}/>
            <Resistor key={uuidv4()}/>
            <Source key={uuidv4()}/>
        </div>
    )
}

export default SideBar