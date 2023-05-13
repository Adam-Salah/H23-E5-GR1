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


export class Calculator {

    constructor() {
    }

    identifyNodes(circuit) {
        var nodes = new Set();

        // iterate throught every component
        for (let component of circuit.components) {

            // iterate throught every component's ports (2)
            for(let i = 0; i > component.ports.length; i++){

                // node whenever a port is connected to 2 or more 
                if (component.ports[i] > 1){
                    var node = new Set();
                    // add itself to the node
                    node.add(component);
                    // add everything that's connected to component to the node
                    for(let connection of component.port[i]){
                        node.add(connection);
                    }

                    // if the node doesn't already exist, add it
                    for (let otherNode of nodes){
                        if (!setsAreEqual(otherNode, node)){
                            nodes.add(node);
                        }
                    }
                }
            }
        }
        return nodes;
    }

    setsAreEqual(setA, setB) {

        if (setA.size !== setB.size) {
            console.log("not same size");
            return false;
        }

        // if they contain the same items but ordered differently, they are still equal (returns true)
        for (let item of setA) {
            if (setB.has(item)) {
                console.log(!setA.has(item));
                return true;
            }
        }
    }

    calculateResistance(circuit){

        // create an array of all resistors
        var resistors = [];

        for (let i = 0; i < circuit.components.length; i++) {
            if (circuit.components[i] instanceof Resistor) {
                if(circuit.components[i].ports[0].size !== 0 ||
                    circuit.components[i].ports[1].size !== 0){
                        resistors.push(circuit.components[i]);
                    }
            }
        }

        console.log(resistors);

        // SIMPLIFY CIRCUIT -> if series / if parallel
        while(resistors.length > 1) {
            for (let resistor of resistors){
                for (let otherResistor of resistors){
                    // so it doesn't compare with itself
                    if(resistor !== otherResistor){
                        if (this.isInSeries(resistor, otherResistor)){
                            console.log(resistor+" and "+otherResistor+" in SERIES")
                            this.replaceResistor(resistors, resistor, otherResistor, true);
                        }
                    }
                }
            }
        }
        /*
        while(resistors.length > 1) {

            for (let resistor of resistors){
                for (let otherResistor of resistors){

                    // so it doesn't compare with itself
                    if(resistor !== otherResistor){
                        if (this.isInSeries(resistor, otherResistor))
                            this.replaceResistor(resistors, resistor, otherResistor, true);

                        if(this.isInParallel(resistor, otherResistor, this.identifyNodes(circuit)))
                            this.replaceResistor(resistors, resistor, otherResistor, false);
                    }
                }
            }
        }
        */
        return resistors[0].resistance;
    }

    // two components are in series if they are only connected to eachother
    isInSeries(componentA, componentB){
        console.log("isInSeries Called")
        // both ports of component A
        for (let portA of componentA.ports){
            // both ports of component B
            for (let portB of componentB.ports){
                console.log("portA size : "+portA.size+"  "+"portB size : "+portB.size);
                if(portA.size == 1 && portB.size == 1 && 
                    portA.has(portB) && portB.has(portA)){

                        return true;
                        /*
                        if(this.setsAreEqual(portA, portB)){
                            console.log("sets are euqal")
                        }
                        */
                }
                /*
                    this.setsAreEqual(portA, portB)
                */
            }
        }
        return false;
    }
    
    // two components are in parallel if they are connected to the same node
    isInParallel(componentA, componentB, nodes){
        for(let node of nodes){
            for (let otherNode of nodes){
                // so it doesn't compare with itself
                if (node !== otherNode){
                    if(node.has(componentA) && node.has(componentB) &&
                    otherNode.has(componentA) && otherNode.has(componentB)){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // in the array of resistors, replaces resistor and otherResistor with another
    // equivalent resistor

    replaceResistor(resistors, resistor, otherResistor, series){
        // replace these resistors by 1 equivalent resistor inside resistors
        resistors.splice(resistors.indexOf(resistor), 1);
        resistors.splice(resistors.indexOf(otherResistor), 1);

        if(series)
            var newResistance = resistor.resistance + otherResistor.resistance;
        else // parallel
            var newResistance = (1/resistor.resistance + 1/otherResistor.resistance)^(-1);

        var newResistor = new Resistor(0, 0, newResistance)

        // newResistor's port1 will have resistor's port1 + (concat) otherResistor's port1
        for (let i = 0; i > newResistor.ports; i++){
            newResistor.ports[i] = resistor.ports[i].concat(otherResistor.ports[i]);
        }
        resistors.push(newResistor);
        return resistors
    }


    calculateVoltage(circuit){
        var voltage = 0;
        for (let i = 0; i < circuit.components.length; i++) {
            if (circuit.components[i] instanceof Source) {
                voltage += parseInt(circuit.components[i].voltage);
            }
        }
        return voltage;
    }

    calculateCurrent(resistance, voltage){
        if(voltage == 0)
            return 0;
        else
            return resistance/voltage;
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