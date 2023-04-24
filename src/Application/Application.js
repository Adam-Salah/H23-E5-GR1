import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Grille from "./Grille";
import SideBar from "./Sidebar";

function Application() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Grille/>
            <SideBar/>
        </DndProvider>
    )
}

export default Application