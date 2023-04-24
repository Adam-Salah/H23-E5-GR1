import React from "react";
import Case from "./Case";

function Grille() {
    let cases = new Array(10)
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let id = j.toString().concat(";", i.toString());
            cases.push(<Case key={id} id={id} x={j} y={i}/>)
        }
    }

    return (
        <ul className={'grid'}>{cases}</ul>
    )
}

export default Grille