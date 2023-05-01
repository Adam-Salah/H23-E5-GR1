import { Component, Source, Resistor, Capacitor, Port } from './components.js';

export class Circuit {

    constructor() {
        this.components = []; 
    }

    add(component) {
        this.components.push(component);
    }

    delete(component) {
        if (this.components.indexOf(component) !== -1) {
        this.components.splice(index, 1);
        }
    }

    connect(portA, portB) {
        portA.add(portB)
        portB.add(portA)
    }

    // CHANGE
    disconnect(componentA, componentB) {
        if (componentA.connectedTo.has(componentB))
            componentA.connectedTo.delete(componentB)
        else
            console.log("port 1 isnt connected to port 2")

        if (componentB.connectedTo.has(componentA))
        componentB.connectedTo.delete(componentA)
        else
            console.log("port 2 isnt connected to port 1")
    }

    deleteCircuit(){
        this.components = [];
    }

// ========== CALCULATIONS ===========

    identifyNode(){
        
    }
}