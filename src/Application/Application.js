import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Grille from "./Grille";
import SideBar from "./Sidebar";

/**
 * DndProvider permet d'utiliser les fonctionalités Drag et Drop dans l'application
 */
function Application() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Grille/>
            <SideBar/>
        </DndProvider>
    )
}

export default Application