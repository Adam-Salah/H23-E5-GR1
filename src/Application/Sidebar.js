import Led from "./Composantes/Led";
import React from "react";

function SideBar() {
    let id = React.useId;
    return (
        <div className={'sidebar-left'}>
            <Led key={id}/>
        </div>
    )
}

export default SideBar