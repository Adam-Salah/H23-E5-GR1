import Component from './deletelater.js';
import Resistor from './deletelater.js';

let circuit = [];

var component1 = new Resistor(10, 20, 30);

circuit.push(component1);

circuit.forEach(function(item) {
    console.log(item);
  });


