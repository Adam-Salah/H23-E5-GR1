//import { Circuit, Component, Source, Resistor, Capacitor, Port } from './components.js';

const sourceSize = 10;
const resistorSize = 20;
const capacitorSize = 30;

class Component{
    constructor(id, type, positionX, positionY, size){
        this.id = id;
        this.type = type;
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = size;

        this.ports = []

        this.ports.push(new Port(positionX-50, positionY-50, null))
        this.ports.push(new Port(positionX-50, positionY-50, null))
    }
}
class Source extends Component {
    constructor(positionX, positionY, voltage) {
      super("Source", positionX, positionY, sourceSize);
      this.voltage = voltage;
    }
  }

class Circuit {

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
      port1.connectedTo.push(port2);
      port2.connectedTo.push(port1);
    }
  
    disconnect(port1, port2) {
      index1 = port1.connectedTo.indexOf(port1);
      index2 = port2.connectedTo.indexOf(port2);
      if (index1 !== -1 && index2 !== -1) {
        port1.connectedTo.splice(port1, 1);
        port2.connectedTo.splice(port2, 1);
      }
    }
  
    deleteCircuit(){
      this.listOfComponents = [];
    }
  }

var circuit = new Circuit();

function testing(){
    var test = document.getElementById("testing_id");

    test.addEventListener("click", function(event) {
        var voltage = event.target.getAttribute("voltage");
        circuit.add(new Source(20, 20, voltage))
        console.log(circuit);
    });
}



