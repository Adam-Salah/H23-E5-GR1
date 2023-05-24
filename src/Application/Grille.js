import React, {useState} from 'react';
import Case from './Case';
import Ligne from './Ligne';
import {v4 as uuidv4} from 'uuid';

import {Calculator} from '../calculations.js';
import {Circuit} from '../circuit.js';
import {Source, Resistor, Capacitor, Led} from '../components.js';
import Resultats from './Resultats';
import Poubelle from './Poubelle';


function Grille() {
	
	/**
	 * Popule la grille de cases
	 */
	let cases = [];
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let obj = {
				key: uuidv4(),
				x: j,
				y: i,
				type: null,
				ports: []
			};
			cases.push(obj);
		}
	}
	/**
	 * État des cases sauvegardé entre changements dans l'application
	 */
	const [casesState, setCasesState] = useState(cases);
	
	/**
	 * Render les cases, lignes, la poubelle et l'affichage des résultats
	 */
	const render = () => {
		let casesRender = [];
		let lignesRender = [];
		let render = [];
		let tempCases = casesState;
		for (let i = 0; i < tempCases.length; i++) {
			let obj = tempCases.at(i);
			casesRender.push(<Case key={obj.key} x={obj.x} y={obj.y} type={obj.type} ports={obj.ports}
			                       pushComponent={pushComponent} />);
			for (let j = 0; j < obj.ports.length; j++) {
				lignesRender.push(<Ligne key={uuidv4()} from={obj.ports.at(j)}
				                         to={obj.x.toString().concat(';', obj.y.toString())} />);
			}
		}
		
		let resultats = calculer(tempCases);
		
		render.push(casesRender);
		render.push(lignesRender);
		render.push(<Poubelle key={uuidv4()} remove={removeComponent} />);
		render.push(<Resultats key={uuidv4()} resultats={resultats} />);
		
		return render;
	};
	
	
	function calculer(tempCases) {
		
		const calculator = new Calculator();
		
		//Crée un nouveau circuit
		var circuit = new Circuit();
		
		for (let i = 0; i < tempCases.length; i++) {
			let obj = tempCases.at(i);
			// Si la composante est connectée, elle est ajoutée au circuit
			if (obj.ports !== '') {
				switch (obj.type) {
					case 'Source':
						circuit.add(new Source(obj.x, obj.y, 100));
						break;
					case 'Resistor':
						circuit.add(new Resistor(obj.x, obj.y, 100));
						break;
					case 'Capacitor':
						circuit.add(new Capacitor(obj.x, obj.y, 100));
						break;
					case 'Led':
						circuit.add(new Led(obj.x, obj.y));
						break;
				}
			}
		}
		
		
		for (let i = 0; i < tempCases.length; i++) {
			tempCases.at(i).ports.at(0);
		}
		
		// Calculs
		
		//var totalResistance = calculator.calculateResistance(circuit);
		var totalVoltage = calculator.calculateVoltage(circuit);
		var totalCurrent = calculator.calculateCurrent(totalVoltage, 100);
		
		return [totalVoltage, totalCurrent];
		
	}
	
	/**
	 * État du render des cases sauvegardé entre changements dans l'application
	 */
	const [casesRenderState, setCasesRenderState] = useState(render);
	
	/**
	 * Ce qui se passe lorsque l'on glisse une composante.
	 * Prends en paramètres les coordonées x et y de la case, le type de la composante glissée et
	 *      l'Id de la composante glissée (l'Id contient ses coordonnées d'origine.)
	 * D'abord, on vérifie toutes les cases pour savoir laquelle est celle où l'on a glissé la composante.
	 * Ensuite, si la case est déja populé d'une composante, on fait une connexion entre les deux en ajoutant leurs Ids
	 *      à leurs ports
	 * Si on bouge une composante d'une case à une autre, les connexions et ainsi, les fils, bougent avec elle. On
	 *      supprime la composante de sa case originale.
	 * Enfin, si la composante est nouvelle, on ne fait que l'ajouter à la grille
	 */
	function pushComponent(x, y, itemType, itemId) {
		let tempCases = casesState;
		let finalState;
		for (let i = 0; i < tempCases.length; i++) {
			if (tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString())
				=== x.toString().concat(';', y.toString())) {
				if (tempCases.at(i).type !== null && itemId !== 'c') {
					
					tempCases.at(i).ports.push(itemId);
					for (let j = 0; j < tempCases.length; j++) {
						if (tempCases.at(j).x.toString().concat(';', tempCases.at(j).y.toString())
							=== itemId) {
							
							tempCases.at(j).ports.push(tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString()));
						}
					}
					finalState = tempCases;
				} else if (itemId !== 'c') {
					
					console.log(tempCases);
					tempCases.at(i).type = itemType;
					
					for (let j = 0; j < tempCases.length; j++) {
						if (tempCases.at(j).x.toString().concat(';', tempCases.at(j).y.toString()) === itemId) {
							tempCases.at(i).ports = tempCases.at(j).ports;
						}
					}
					let newId = tempCases.at(i);
					finalState = removeComponent(itemId, newId, tempCases);
				} else {
					tempCases.at(i).type = itemType;
				}
			}
		}
		setCasesState(finalState);
		setCasesRenderState(render());
	}
	
	/**
	 * Supprime une composante de la grille
	 * D'abord on vérifie si la composante a des attributs -1. Si oui, cela veut dire qu'elle a été glissée dans la
	 *      poubelle et qu'on n'a pas besoin de retourner de valeur
	 * Ensuite, on vérifie toutes les cases et supprime les connexions avec la composante d'origine.
	 * Enfin, on supprime les informations rattachées à la case de départ de la composante
	 */
	function removeComponent(itemId, newId, state) {
		
		let tempCases;
		if (state === -1) {
			tempCases = casesState;
		} else {
			tempCases = state;
		}
		
		for (let i = 0; i < tempCases.length; i++) {
			if (tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString())
				=== itemId) {
				tempCases.at(i).type = null;
				tempCases.at(i).ports = [];
			} else if (tempCases.at(i).ports.length !== 0) {
				let estConnecte = false;
				for (let j = 0; j < tempCases.at(i).ports.length; j++) {
					if (tempCases.at(i).ports.at(j) === itemId) {
						estConnecte = true;
					}
				}
				if (estConnecte) {
					let ports = [];
					for (let j = 0; j < tempCases.at(i).ports.length; j++) {
						if (tempCases.at(i).ports.at(j) !== itemId) {
							ports.push(tempCases.at(i).ports.at(j));
						}
					}
					tempCases.at(i).ports = ports;
					if (newId !== -1) {
						tempCases.at(i).ports.push(newId.x.toString().concat(';', newId.y.toString()));
					}
				}
			}
		}
		if (newId !== -1) {
			return tempCases;
		} else {
			setCasesState(tempCases);
			setCasesRenderState(render());
			return undefined;
		}
	}
	
	return (
		<ul className={'grid'} id={'grid'}>{casesRenderState}</ul>
	);
}

export default Grille;