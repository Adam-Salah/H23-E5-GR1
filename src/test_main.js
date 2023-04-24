import { Component, Source, Resistor, Capacitor, Port } from './components.js';

import { Circuit } from './circuit.js';

var circuit = new Circuit();

var source = document.getElementById("source_button");
source.addEventListener("click", function(event) {
    var voltage = event.target.getAttribute("voltage");
    circuit.add(new Source(20, 20, voltage))
    console.log(circuit, "added source");
});

var resistor = document.getElementById("resistor_button");
resistor.addEventListener("click", function(event) {
    var resistance = event.target.getAttribute("resistance");
    circuit.add(new Resistor(20, 20, resistance))
    console.log(circuit, "added resistor");
});

var capacitor = document.getElementById("capacitor_button");
capacitor.addEventListener("click", function(event) {
    var capacitance = event.target.getAttribute("capacitance");
    circuit.add(new Capacitor(20, 20, capacitance))
    console.log(circuit, "added capacitor");
});

var deleteAll = document.getElementById("delete_all_button");
deleteAll.addEventListener("click", function(event) {
    circuit.deleteCircuit()
    console.log(circuit, "entire circuit deleted");
});

var connect = document.getElementById("connect_button");
connect.addEventListener("click", function(event) {
    circuit.connect(circuit.components[0], 
                    circuit.components[1])
    
    for (let i = 0; i < 2; i++) {
            console.log(circuit.components[i].connectedTo);
    }
});

var disconnect = document.getElementById("disconnect_button");
disconnect.addEventListener("click", function(event) {
    circuit.disconnect(circuit.listOfComponents[0].ports[0], 
        circuit.listOfComponents[1].ports[1])

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            console.log(circuit.listOfComponents[i].ports[j].connectedTo);
        }
    }
});





