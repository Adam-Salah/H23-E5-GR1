import React from "react";
import ReactDOM from "react-dom/client";
import {Tab, TabList, Tabs, TabPanel} from "react-tabs";


function BrowseTabs() {
    return (
        <TabList className={"tabs_list"}>
            <Tab className={"tabs"}>Tab 1</Tab>
            <Tab className={"tabs"}>Tab 2</Tab>
            <Tab className={"tabs"}>Tab 3</Tab>
            <Tab className={"tabs"}>Tab 4</Tab>
            <Tab className={"tabs"}>Tab 5</Tab>
        </TabList>
    )
}

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

function ProjectList() {
    let projects = [];
    for (let i = 0; i < 100; i++) {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        let key = Math.floor(Math.random() * 1000000);
        projects.push(<Project color={"#" + color} key={key}/>)
    }
    return(
        projects
    )
}

const root = ReactDOM.createRoot(document.getElementById('browsing_container'));
root.render(
    <div>
        <BrowseTabs />
        <div className={"project_list"}>
            <ProjectList />
        </div>
    </div>
)



