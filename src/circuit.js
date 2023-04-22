import { Component, Source, Resistor, Capacitor, Port } from './components.js';

export class Circuit {

    constructor() {
        this.listOfComponents = []; 
    }

    add(component) {
        this.listOfComponents.push(component);
    }

    delete(component) {
        if (this.listOfComponents.indexOf(component) !== -1) {
        this.listOfComponents.splice(index, 1);
        }
    }

    connect(port1, port2) {
        port1.connectedTo.add(port2)
        port2.connectedTo.add(port1)
    }

    disconnect(port1, port2) {
        if (port1.connectedTo.has(port2))
            port1.connectedTo.delete(port2)
        else
            console.log("port 1 isnt connected to port 2")

        if (port2.connectedTo.has(port1))
            port2.connectedTo.delete(port1)
        else
            console.log("port 2 isnt connected to port 1")
    }

    deleteCircuit(){
        this.listOfComponents = [];
    }
}
// ========== CALCULATIONS ===========

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

