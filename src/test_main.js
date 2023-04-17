import { Circuit, Component, Source, Resistor, Capacitor, Port } from './components.js';

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
    circuit.connect(circuit.listOfComponents[0].ports[0], 
                    circuit.listOfComponents[1].ports[1])

    circuit.listOfComponents[0].ports[0].push(new Port(10, 10, []))

    console.log(circuit, "connected");
    console.log("component 1's port 1's connected to : "+
        circuit.listOfComponents[0].ports[0])
    console.log("component 1's port 2's connected to : "+
        circuit.listOfComponents[0].ports[1])
    console.log("component 2's port 1's connected to : "+
        circuit.listOfComponents[1].ports[0])
    console.log("component 2's port 2's connected to : "+
        circuit.listOfComponents[1].ports[1])

});





