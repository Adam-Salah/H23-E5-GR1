import React from 'react';
import {useDrop} from 'react-dnd';
import {ItemTypes} from './Constantes';
import Led from './Composantes/Led.js';
import Resistor from "./Composantes/Resistor";
import Source from "./Composantes/Source";

function Case({x, y, type, pushComponent}) {
	
	let id = x.toString().concat(';', y.toString());
	
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
	
	let color;
	if (isOver) {
		color = 'yellow';
	} else if (didDrop) {
		color = 'blue';
	}
	
	return (
		<div ref={drop} className={'case'} id={id} style={{backgroundColor: color}}>
			{component}
		</div>
	);
}

export default Case;