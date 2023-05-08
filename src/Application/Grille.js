import React, {useEffect, useState} from 'react';
import Case from './Case';
import Ligne from './Ligne';
import {v4 as uuidv4} from 'uuid';

function Grille() {
	
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
	const [casesState, setCasesState] = useState(cases);
	const [filsState, setFilsState] = useState([]);
	
	const render = () => {
		let casesRender = [];
		let lignesRender = [];
		let render = [];
		let tempCases = casesState;
		let tempFils = filsState;
		for (let i = 0; i < tempCases.length; i++) {
			let obj = tempCases.at(i);
			casesRender.push(<Case key={obj.key} x={obj.x} y={obj.y} type={obj.type} ports={obj.ports}
			                       pushComponent={pushComponent} />);
		}
		for (let i = 0; i < tempFils.length; i++) {
			lignesRender.push(<Ligne key={uuidv4()} from={tempFils.at(i).at(0)}
			                         to={tempFils.at(i).at(1)} />);
		}
		
		render.push(casesRender);
		render.push(lignesRender);
		return render;
	};
	
	const [casesRenderState, setCasesRenderState] = useState(render);
	
	function pushComponent(x, y, itemType, itemId) {
		let tempCases = casesState;
		let tempFils = [];
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
				} else {
					tempCases.at(i).type = itemType;
					finalState = removeComponent(itemId, tempCases);
				}
			}
		}
		for (let i = 0; i < casesState.length; i++) {
			for (let j = 0; j < casesState.at(i).ports.length; j++) {
				if (casesState.at(i).ports.at(j) !== null &&
					casesState.at(i).ports.at(j) !== undefined) {
					tempFils.push(
						[casesState.at(i).x.toString().concat(';', casesState.at(i).y.toString()),
							casesState.at(i).ports.at(j)]);
				}
			}
		}
		setCasesState(finalState);
		setFilsState(tempFils);
		setCasesRenderState(render());
	}
	
	function removeComponent(itemId, state) {
		let tempCases = state;
		for (let i = 0; i < tempCases.length; i++) {
			if (tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString())
				=== itemId) {
				tempCases.at(i).type = null;
				tempCases.at(i).ports = [];
			}
		}
		return tempCases;
	}
	
	return (
		<ul className={'grid'} id={'grid'}>{casesRenderState}</ul>
	);
}

export default Grille;