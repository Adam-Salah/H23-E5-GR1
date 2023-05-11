import { Component, Source, Resistor, Capacitor, Port } from './components.js';

import { Circuit } from './circuit.js';

/*

Kirchhoff's laws : 
Current law -> current going in - current going out = 0
Voltage law -> sum of the difference of potentials inside a loop = 0

Ohm's law :
I = V/R


CALCULATING CURRENT : 
- To find the current, we must know a circuit's total voltage and total resistance.
- The total voltage V is found by simply looking at he source.
The total resistance R is calculated by simplifying the circuit (series/parallel)
until only one resistor remains.
- We then use Ohm's law to find the current

CALCULATING DIFFERENCE OF VOLTAGE AT 2 POINTS
- 
*/


class Calculator {

    constructor() {
    }

    identifyNodes(circuit) {

        var nodes = new Set();

        for (let component of circuit.listOfComponents) {
            if (component.connectedToPortA.size > 1){
                var node = new Set();
                // add itself to the node
                node.add(component);
                // add everything that's connected to component to the node
                for(let componentsConectedTo of component.connectedToPortA){
                    node.add(componentsConectedTo);
                }

                // SO, IF I WANT TO ADD A NODE THAT HAS THE SAME THINGS AS ANOTHER PREVIOUS ONE
                // WILL IT BE CONSIDERED AS UNIQUE?
            }
        }
        /*

        // nodes is an array containing node(s) which are arrays of components
        let nodes = [];

        // iterate throught every component of the circuit
        for (let component of circuit) {

            // iterate throught every component's connections (connectedTo Set)
            for (let connectedTo of component.connectedTo) {

                let nodeFound = false;

                // iterate throught every node
                for (let node of nodes) {

                // 
                if (node.includes(connectedTo)) {
                    nodeFound = true;
                    if (!node.includes(component)) {
                    node.push(component);
                    }
                    break;
                }
                }
                if (!nodeFound) {
                nodes.push([component, connectedComponent]);
                }
            }
        }
        return nodes;

        */
      }

    calculateResistance(circuit){

        // create an array of all resistors
        var resistors = [];

        for (let i = 0; i < circuit.listOfComponents.length; i++) {
            if (circuit[i] instanceof Resistor) {
                resistors.push(circuit[i]);
            }
        }

        // SIMPLIFY CIRCUIT -> if series / if parallel

        while(resistors.length > 1) {
            
            for (let i = 0; i < resistors.length; i++) {

                // series

                // if connectedTo only has 1 port connected, it means its in series
                var resistor = resistors[i]; // resistor object 

                if (resistor.connectedToPortA.size === 1 || resistor.connectedToPortB.size === 1){ 

                    if(resistor.connectedToPortA.size === 1)
                        var connectedTo = resistor.connectedToPortA.values().next().value; // the set's first component 
                    else
                        var connectedTo = resistor.connectedToPortB.values().next().value; 

                    // replace these resistors by 1 equivalent resistor inside resistors
                    resistors.splice(i, 1);
                    resistors.splice(resistors.indexOf(connectedTo), 1);

                    //two resistors in series
                    var newResistance = resistor.resistance + connectedTo.resistance;
                    var newResistor = new Resistor(0, 0, newResistance)
                    newResistor.connectedToPortA = resistor.connectedToPortA.concat(connectedTo.connectedToPortA);
                    newResistor.connectedToPortB = resistor.connectedToPortB.concat(connectedTo.connectedToPortB);

                    resistors.push(newResistor);

                }

                // parallel

                // two resistors are in parallel if both their ports are connected
                // to the same two nodes

                if (resistor.connectedTo.size === 1){ 

                    var connectedTo = resistor.connectedTo.values().next().value; // the set's first component 

                    if(resistor.connectedTo === connectedTo)
                        console.log("they are indeed in series")

                    // replace these resistors by 1 equivalent resistor inside resistors
                    resistors.splice(i, 1);
                    resistors.splice(resistors.indexOf(connectedTo), 1);

                    //two resistors in parallel
                    var newResistance = (1/resistor.resistance + 1/connectedTo.resistance)^(-1);
                    var newResistor = new Resistor(0, 0, newResistance)
                    resistors.push(newResistor);

                }
            }
        }

        return resistors[0].resistance;
    }

    calculateVoltage(circuit){
        let voltage = 0;
        for (let i = 0; i < circuit.listOfComponents.length; i++) {
            if (circuit[i] instanceof Source) {
                voltage += circuit[i].voltage
            }
        }
        return voltage;
    }

    calculateCurrent(voltage, resitance){
        return voltage/resitance;
    }

    calculateVoltageDrop(pointA, pointB){
        // Ohm's law to calculate difference of potential
    }
}



