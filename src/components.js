

class Component{
    constructor(type, positionX, positionY, size){
        this.type = type;
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = size;

        var port1 = new Port("Negative", positionX-50, positionY-50, null)
        var port2 = new Port("Positive", positionX-50, positionY-50, null)
    }
}
class Source extends Component {
    constructor(positionX, positionY, voltage) {
      super("Source", positionX, positionY, 100);
      this.voltage = voltage;
    }
  }

class Resistor extends Component {
    constructor(positionX, positionY, resistance) {
      super("Resistor", positionX, positionY, 100);
      this.resistance = resistance;
    }
  }

class Capacitor extends Component {
    constructor(positionX, positionY, capacitance) {
      super("Capacitor", positionX, positionY, 100);
      this.capacitance = capacitance;
    }
  }

class Port {
    constructor(polarity, positionX, positionY, connectedTo) {
      this.polarity = polarity;
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



//======================================= I WANT THIS TO BE IN ANOTHER FILE BUT IDK HOW ======================================================

// Define a Component class with properties for the component type, value, and connections
var circuit = [];

function addResistor(){
    const resistor = document.getElementById("resistor");

    resistor.addEventListener("click", function(event) {

        const resistance = event.target.getAttribute("resistance");
        circuit.push(new Resistor(10, 10, resistance))
        console.log(circuit);

    });
}
