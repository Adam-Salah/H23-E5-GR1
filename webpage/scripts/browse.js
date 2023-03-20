import ReactDOM from 'react-dom/client';
import Project from "./Project";

const root = ReactDOM.createRoot(document.getElementById('view_tab'));
for (let i = 0; i < 100; i++) {
    console.log(i)
    root.render(<Project />);
}

