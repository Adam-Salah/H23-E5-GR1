import { Circuit, Component, Source, Resistor, Capacitor, Port } from './components.js';

var circuit = new Circuit();

function testing(){
    var test = document.getElementById("testing_id");

    test.addEventListener("click", function(event) {
        var voltage = event.target.getAttribute("voltage");
        circuit.add(new Source(20, 20, voltage))
        console.log(circuit);
    });
}



