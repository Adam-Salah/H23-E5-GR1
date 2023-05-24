import { Component, Source, Resistor, Capacitor, Port } from './components.js';

export class Circuit {

    constructor() {
        this.components = []; 
    }
    /**
     * Ajoute une composante
     * @param {*} component 
     */
    add(component) {
        this.components.push(component);
    }

    /**
     * Enlève une composante
     * @param {*} component 
     */
    delete(component) {
        if (this.components.indexOf(component) !== -1) {
        this.components.splice(index, 1);
        }
    }

    /**
     * Connecte deux composantes ensemble
     * @param {*} portA 
     * @param {*} portB 
     */
    connect(portA, portB) {
        portA.add(portB)
        portB.add(portA)
    }

    /**
     * Déconnecte deux composantes 
     * @param {*} portA 
     * @param {*} portB 
     */
    disconnect(portA, portB) {
        if (portA.has(portB))
            portA.delete(portB)
        else
            console.log("port 1 isnt connected to port 2")

        if (portB.has(portA))
            portB.delete(portA)
        else
            console.log("port 2 isnt connected to port 1")
    }

    /**
     * Enlève le circuit au complet
     */
    deleteCircuit(){
        this.components = [];
    }
}

