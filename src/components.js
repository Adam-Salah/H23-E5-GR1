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
        
        this.ports = [
          new Port(positionX-50, positionY-50, new Set()), // null -> connected to nothing
          new Port(positionX-50, positionY-50, new Set()),
        ]
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
      this.connectedTo = connectedTo; // instance of other ports
    }
    
    /*
    connectTo(port) {
        this.connectedTo = port; // port 1 is connected to port 2
        port.connectedTo = this.port // port 2 is connected to port 1
    }
    */

    disconnect() {
        if(isConnected) {
            this.connectedTo.connectedTo = null; // port connected to port 2 (so port 1) will disconnect
            this.connectedTo = null; // port connected to port 1 (so port 2) will disconnect
        }
    }

    isConnected(){
        return this.connectedTo !== null; // if connectedTo isnt null, return true
    }

    getConnections(){
        return this.connectedTo;
    }

    toString() {
      return `un dwadawd`;
    }
  }

  
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
//===================== CALCULATIONS =================

/*

Kirchhoff's laws : 
Current law -> current going in - current going out = 0
Voltage law -> sum of the difference of potentials inside a loop = 0

Ohm's law :
I = difference of potential/R

*/