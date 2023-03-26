function Project() {

    return (
        <div>
            <div></div>
            <h2>Projet</h2>
        </div>
    );
}

let projects = [];
for (let i = 0; i < 100; i++) {
    projects.push(<Project/>)
}


const root = ReactDOM.createRoot(document.getElementById('view_tab'));
root.render(projects);


