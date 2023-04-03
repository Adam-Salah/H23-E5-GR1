function Project(props) {
    return (
        <div>
            <div style={{backgroundColor: props.color}}></div>
            <h1>Projet</h1>
            <h2>Date</h2>
            <h3>Auteur</h3>
        </div>
    );
}

let projects = [];
for (let i = 0; i < 100; i++) {
    let color = Math.floor(Math.random()*16777215).toString(16);
    projects.push(<Project color={"#"+color}/>)
}

const root = ReactDOM.createRoot(document.getElementById('view_tab'));
root.render(projects);


