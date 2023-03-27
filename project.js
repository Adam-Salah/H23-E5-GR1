import Led from "./components/led.js"
import DndProvider from "./node_modules/react-dnd"
import HTML5Backend from "./node_modules/react-dnd-html5-backend";

function Container() {
    return <DndProvider backend={HTML5Backend}>...</DndProvider>
}

let components = [];
for (let i = 0; i < 10; i++) {
    let key = Math.floor(Math.random()*1000000);
    components.push(<Led key={key}/>)
}

const sidebar_left = ReactDOM.createRoot(document.getElementById("led"));
sidebar_left.render(components)

const container = ReactDOM.createRoot(document.getElementById("main"))
container.render(<h1>Hi</h1>)