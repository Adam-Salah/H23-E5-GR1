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

    calculateResistance(circuit){

        // create an array of all resistors
        let resistors = [];

        for (let i = 0; i < circuit.listOfComponents.length; i++) {
            if (circuit[i] instanceof Resistor) {
                resistors.push(circuit[i]);
            }
        }

        // series
        for (let i = 0; i < resistors.length; i++) {
            // if connectedTo only has 1 port connected, it means its in series
            var resistor = resistors[i]; // resistor object 

            if (resistor.connectedTo.size === 1){ 

                var connectedTo = resistor.connectedTo.values().next().value; // the set's first component 

                if(resistor.connectedTo === connectedTo)
                    console.log("they are indeed in series")

                // replace these resistors by 1 equivalent resistor inside resistors
                resistors.splice(i, 1);
                resistors.splice(resistors.indexOf(connectedTo), 1);

                //two resistors in series
                var newResistance = resistor.resistance + connectedTo.resistance;
                var newResistor = new Resistor(0, 0, newResistance)
                resistors.push(newResistor);

            }
        }

        // parallel

        // two resistors are in parallel if both their ports are connected
        // to the same two nodes

        for (let i = 0; i < circuit.listOfComponents.length; i++) {
            for (let j = 0; j < circuit.listOfComponents.length; j++) {
                // if connected to two or more, it'l parallel
            }
        }

        return resistance;
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



