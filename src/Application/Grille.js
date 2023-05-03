import React, {useState} from 'react';
import Case from './Case';
import Ligne from './Ligne';

function Grille() {
	
	let cases = [];
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let obj = {
				key: React.useId(),
				x: j,
				y: i,
				type: null,
				ports: []
			};
			cases.push(obj);
		}
	}
	const [casesState, setCasesState] = useState(cases);
	
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
				lignesRender.push(<Ligne key={React.useId()} from={obj.ports.at(j)}
				                         to={obj.x.toString().concat(';', obj.y.toString())} />);
			}
		}
		render.push(casesRender)
		render.push(lignesRender)
		return render;
	};
	
	const [casesRenderState, setCasesRenderState] = useState(render);
	
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
				} else {
					tempCases.at(i).type = itemType;
					finalState = removeComponent(itemId, tempCases);
				}
			}
		}
		setCasesState(finalState);
		setCasesRenderState(render());
	}
	
	function removeComponent(itemId, state) {
		let tempCases = state;
		for (let i = 0; i < tempCases.length; i++) {
			if (tempCases.at(i).x.toString().concat(';', tempCases.at(i).y.toString())
				=== itemId) {
				tempCases.at(i).type = null;
			}
		}
		return tempCases;
	}
	
	return (
		<ul className={'grid'} id={'grid'}>{casesRenderState}</ul>
	);
}

export default Grille;