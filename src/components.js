const sourceSize = 10;
const resistorSize = 20;
const capacitorSize = 30;

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
      super("Source", positionX, positionY, sourceSize);
      this.voltage = voltage;
    }
  }

class Resistor extends Component {
    constructor(positionX, positionY, resistance) {
      super("Resistor", positionX, positionY, resistorSize);
      this.resistance = resistance;
    }
  }

class Capacitor extends Component {
    constructor(positionX, positionY, capacitance) {
      super("Capacitor", positionX, positionY, capacitorSize);
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
