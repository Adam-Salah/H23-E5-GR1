import React from 'react';
import {useDrop} from 'react-dnd';
import {ItemTypes} from './Constantes';
import Led from './Composantes/Led.js';
import Resistor from "./Composantes/Resistor";
import Source from "./Composantes/Source";

function Case({x, y, type, pushComponent}) {
	
	let id = x.toString().concat(';', y.toString());
	
	/**
	 * Accept définie les types d'objets que l'on peut glisser sur la case
	 * Drop définie l'action à effectuer. Içi, on crée une nouvelle composante dans la case.
	 * Collect recueille des informations sur l'état de la case. Par exemple, elle peut détecter une composante qui est
	 *      au-dessus de la case.
	 */
	const [{isOver, didDrop}, drop] = useDrop(
		() => ({
			accept: [ItemTypes.LED, ItemTypes.SOURCE, ItemTypes.RESISTOR],
			drop: (item) => newComponent(item.itemType, item.itemId),
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				didDrop: monitor.didDrop()
			})
		})
	);
	
	function newComponent(itemType, itemId) {
		pushComponent(x, y, itemType, itemId)
	}
	
	/**
	 * Décide quel type de composante afficher dans la case
	 */
	let component;
	switch (type) {
		case 'Led':
			component = <Led key={React.useId} x={x} y={y} />;
			break;
		case 'Resistor':
			component = <Resistor key={React.useId} x={x} y={y} />;
			break;
		case 'Source':
			component = <Source key={React.useId} x={x} y={y} />;
			break;
		case undefined:
			component = null;
			break;
	}
	
	/**
	 * S'il y a une composante au dessus, la case devient jaune
	 */
	let color;
	if (isOver) {
		color = 'yellow';
	}
	
	return (
		<div ref={drop} className={'case'} id={id} style={{backgroundColor: color}}>
			{component}
		</div>
	);
}

export default Case;