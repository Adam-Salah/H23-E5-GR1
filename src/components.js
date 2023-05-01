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
        
        // each component will have 2 ports that can each connect  
        // to an infinit amount of ports

        /*
        this.ports = [
          new Port(new Set()),
          new Port(new Set()),
        ]
        */

        //this.port = new Port(new Set());
        this.ports = [
          new Port(new Set()),
          new Port(new Set()),
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

/*
export class Port {
    constructor(connectedTo) {
      this.connectedTo = connectedTo; // set of other ports
    }
*/
    
    /*
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

    getConnections(){
        return this.connectedTo;
    }

    toString() {
      return `un dwadawd`;
    }

    */
  