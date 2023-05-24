import React from "react";
import ReactDOM from "react-dom/client";
import {Tab, TabList} from "react-tabs";

/**
 *
 * Permet de changer de fenêtre pour voir differents types de projets (inutilisé)
 */
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

/**
 *
 * Boîte de type Card qui montre les projets déjà crées
 */
function Projet(props) {
    return (
        <div>
            <div style={{backgroundColor: props.color}}></div>
            <h1>Projet</h1>
            <h2>Date</h2>
            <h3>Auteur</h3>
        </div>
    );
}

/**
 *
 * Liste de tous les projets déja crées (valeurs aléatoires, car lien avec database non existant)
 */
function ProjetList() {
    let projects = [];
    for (let i = 0; i < 100; i++) {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        let key = Math.floor(Math.random() * 1000000);
        projects.push(<Projet color={"#" + color} key={key}/>)
    }
    return(
        projects
    )
}

/**
 *
 * Render des éléments interagibles de la page
 */
const root = ReactDOM.createRoot(document.getElementById('browsing_container'));
root.render(
    <div>
        <BrowseTabs />
        <div className={"project_list"}>
            <ProjetList />
        </div>
    </div>
)



