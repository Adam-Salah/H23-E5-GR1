
const sourceSize = 10;
const resistorSize = 20;
const capacitorSize = 30;

export class Component{
    constructor(id, type, positionX, positionY, size){
        this.id = id;
        this.type = type;
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = size;
        /*
        this.ports = []

        this.ports.push(new Port(positionX-50, positionY-50, null))
        this.ports.push(new Port(positionX-50, positionY-50, null))
        */
    }
}
export class Source extends Component {
    constructor(positionX, positionY, voltage) {
      super("Source", positionX, positionY, sourceSize);
      this.voltage = voltage;
    }
  }

export class Resistor extends Component {
    constructor(positionX, positionY, resistance) {
      super("Resistor", positionX, positionY, resistorSize);
      this.resistance = resistance;
    }
  }

export class Capacitor extends Component {
    constructor(positionX, positionY, capacitance) {
      super("Capacitor", positionX, positionY, capacitorSize);
      this.capacitance = capacitance;
    }
  }

export class Port {
    constructor(positionX, positionY, connectedTo) {
      this.positionX = positionX;
      this.positionY = positionY;
      this.connectedTo = connectedTo; // instance of another port
    }
    
    connectTo(port) {
        this.connectedTo = port; // port 1 is connected to port 2
        port.connectedTo = this.port // port 2 is connected to port 1
    }

    disconnect() {
        if(isConnected) {
            this.connectedTo.connectedTo = null; // port connected to port 2 (so port 1) will disconnect
            this.connectedTo = null; // port connected to port 1 (so port 2) will disconnect
        }
    }

    isConnected(){
        return this.connectedTo !== null; // if connectedTo isnt null, return true
    }
  }
  

//===================== THIS WILL BE IN ANOTHER FILE =================


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

//===================== THIS WILL BE IN ANOTHER FILE =================

/*
var circuit = [];

function addSource(){
    var resistor = document.getElementById("source");

    resistor.addEventListener("click", function(event) {
        var voltage = event.target.getAttribute("voltage");
        circuit.push(new Source(20, 20, voltage))
        console.log(circuit);
        console.log(voltage);
    });
}

function addResistor(){
    var resistor = document.getElementById("resistor");

    resistor.addEventListener("click", function(event) {
        var resistance = event.target.getAttribute("resistance");
        circuit.push(new Resistor(10, 10, resistance))
        console.log(circuit);
        console.log(resistance);
    });
}

function deleteComponent(component){
    circuit.splice(circuit.indexOf(component), 1);
}

function deleteCircuit(){
    circuit = [];
    console.log(circuit);
}
*/


//===================== CALCULATIONS =================

/*

Kirchhoff's laws : 
Current law -> current going in - current going out = 0
Voltage law -> sum of the difference of potentials inside a loop = 0

Ohm's law :
I = difference of potential/R

*/