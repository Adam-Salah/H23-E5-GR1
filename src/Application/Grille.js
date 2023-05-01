import React, {useState} from "react";
import Case from "./Case";

function Grille() {

    let cases = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let obj = {
                key: React.useId(),
                x: j,
                y: i,
                type: null
            }
            cases.push(obj)
        }
    }
    const [casesState, setCasesState] = useState(cases)

    const render = () => {
        let casesRender = []
        for (let i = 0; i < casesState.length; i++) {
            let obj = casesState.at(i)
            casesRender.push(<Case key={obj.key} x={obj.x} y={obj.y} type={obj.type} pushComponent={pushComponent}
                                   removeComponent={removeComponent}/>)
        }
        return casesRender
    }

    const [casesRenderState, setCasesRenderState] = useState(render)

    function pushComponent(x, y, itemType) {
        let tempCases = casesState
        let pushCompleted = false
        for (let i = 0; i < cases.length; i++) {
            if (tempCases.at(i).x.toString().concat(";", tempCases.at(i).y.toString()) === x.toString().concat(";", y.toString())) {
                if (tempCases.at(i).type !== null) {

                } else {
                    tempCases.at(i).type = itemType
                    pushCompleted = true
                }
                setCasesState(tempCases)
            }
        }
        console.log(pushCompleted)
        return pushCompleted
    }

    function removeComponent(itemId) {
        let tempCases = casesState
        for (let i = 0; i < cases.length; i++) {
            if (tempCases.at(i).x.toString().concat(";", tempCases.at(i).y.toString()) === itemId) {
                tempCases.at(i).type = null
                setCasesState(tempCases)
            }
        }
        setCasesRenderState(render)
    }


    return (
        <ul className={'grid'}>{casesRenderState}</ul>
    )
}

export default Grille