import Led from "./components/led.js"

let components = [];
for (let i = 0; i < 10; i++) {
    let key = Math.floor(Math.random()*1000000);
    components.push(<Led key={key}/>)
}

const sidebar_left = ReactDOM.createRoot(document.getElementById("led"));
sidebar_left.render(components)

const container = ReactDOM.createRoot(document.getElementById("container"))
container.render(<container></container>)
