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