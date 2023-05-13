import React, {useState} from 'react';
import Case from './Case';
import Ligne from './Ligne';
import {v4 as uuidv4} from 'uuid';

import { Calculator } from '../calculations.js';
import { Circuit } from '../circuit.js';
import { Component, Source, Resistor, Capacitor, Led, Port } from '../components.js';


function Grille() {

    // ==================================================================================
    var calculator = new Calculator();
    // ==================================================================================

    let cases = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let obj = {
                key: uuidv4(),
                x: j,
                y: i,
                type: null,
                ports: []
            };
            cases.push(obj);
        }
    }
    const [casesState, setCasesState] = useState(cases);

    const render = () => {
        let casesRender = [];
        let lignesRender = [];
        let render = [];
        let tempCases = casesState;
        for (let i = 0; i < tempCases.length; i++) {
            let obj = tempCases.at(i);
            casesRender.push(<Case key={obj.key} x={obj.x} y={obj.y} type={obj.type} ports={obj.ports}
                                pushComponent={pushComponent}/>);
            for (let j = 0; j < obj.ports.length; j++) {
                lignesRender.push(<Ligne key={uuidv4()} from={obj.ports.at(j)}
                                        to={obj.x.toString().concat(';', obj.y.toString())}/>);
            }
        }

        // =================================================================================================

        // BUILD CIRCUIT : 

        //Creates a new circuit everytime
        var circuit = new Circuit();

        for (let i = 0; i < tempCases.length; i++) {
            let obj = tempCases.at(i);
            switch(obj.type){
                case 'Source':
                    circuit.add(new Source(obj.x, obj.y, 100));
                        break;
                case 'Resistor':
                    circuit.add(new Resistor(obj.x, obj.y, 100));
                        break;
                case 'Capacitor':
                    circuit.add(new Capacitor(obj.x, obj.y, 100));
                        break;
                case 'Led':
                    circuit.add(new Led(obj.x, obj.y));
                        break;
            }
        }

        // CALCULATE

        //var totalResistance = calculator.calculateResistance(circuit);
        var totalVoltage = calculator.calculateVoltage(circuit);
        var totalCurrent = calculator.calculateCurrent(100, totalVoltage);

        console.log(circuit);

        console.log("total voltage = "+totalVoltage);
        console.log("total current = "+totalCurrent);

        // ==================================================================================

        render.push(casesRender);
        render.push(lignesRender);
        console.log(casesState)
        return render;
    };

    const [casesRenderState, setCasesRenderState] = useState(render);

    function pushComponent(x, y, itemType, itemId) {
        let tempCases = casesState;
        let finalState;
        for (let i = 0; i < tempCases.length; i++) {
            if (tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString())
                === x.toString().concat(';', y.toString())) {
                if (tempCases.at(i).type !== null && itemId !== 'c') {
                    tempCases.at(i).ports.push(itemId);
                    for (let j = 0; j < tempCases.length; j++) {
                        if (tempCases.at(j).x.toString().concat(';', tempCases.at(j).y.toString())
                            === itemId) {
                            tempCases.at(j).ports.push(tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString()));
                        }
                    }
                    finalState = tempCases;
                } else {
                    tempCases.at(i).type = itemType;
                    if (tempCases.at(i).ports !== undefined) {
                        let tempPorts = []
                        for (let j = 0; j < tempCases.at(i).ports.length; j++) {
                            if (tempCases.at(i).ports.at(j) !== itemId) {
                                tempPorts.push(tempCases.at(i).ports.at(j))
                            }
                        }
                        tempCases.at(i).ports = tempPorts
                    }
                    finalState = removeComponent(itemId, tempCases);
                }
            }
        }
        setCasesState(finalState);
        setCasesRenderState(render());
    }

    function removeComponent(itemId, state) {
        let tempCases = state;
        for (let i = 0; i < tempCases.length; i++) {
            if (tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString())
                === itemId) {
                tempCases.at(i).type = null;
                tempCases.at(i).ports = []; //change later
            }
        }
        return tempCases;
    }

    return (
        <ul className={'grid'} id={'grid'}>{casesRenderState}</ul>
    );
}

export default Grille;