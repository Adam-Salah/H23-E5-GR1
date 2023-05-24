import React from 'react';
import {useDrop} from 'react-dnd';
import {ItemTypes} from './Constantes';


function Poubelle({remove}) {
	
	/**
	 * Supprime une composante lorsqu'on la glisse sur la poubelle
	 */
	const [{}, drop] = useDrop(
		() => ({
			accept: [ItemTypes.LED, ItemTypes.SOURCE, ItemTypes.RESISTOR],
			drop: (item) => remove(item.itemId, -1, -1),
			collect: (monitor) => ({
				isOver: monitor.isOver(),
				didDrop: monitor.didDrop()
			})
		})
	);
	
	return (
		<div ref={drop} className={'poubelle'}>
			<img src={'./ressources/icons/trash-2.svg'} />
		</div>
	);
}

export default Poubelle;