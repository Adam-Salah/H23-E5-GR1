const sourceSize = 10;
const resistorSize = 20;
const capacitorSize = 30;
const ledSize = 40;


export class Component{

    constructor(id, type, positionX, positionY, size){
        this.id = id;
        this.type = type;
        this.positionX = positionX;
        this.positionY = positionY;
        this.size = size;
        
        this.ports = [
          new Port(),
          new Port(),
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

export class Led extends Component {
  constructor(positionX, positionY) {
    super("Led", positionX, positionY, ledSize);
  }
}

export class Port extends Set{
}
