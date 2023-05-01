import React from "react";
import Led from "./Composantes/Led";

function SideBar() {
    return (
        <div className={'sidebar-left'}>
            <Led key={React.useId}/>
        </div>
    )
}

export default SideBar