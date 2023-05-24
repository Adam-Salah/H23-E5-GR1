import React from 'react';
import {useDrag} from 'react-dnd';
import {ItemTypes} from '../Constantes';

function Composante({x, y, itemType, image}) {
	
	/**
	 * Si l'Id de la composante débute par c, c'est qu'elle vient de la Sidebar et non de la grille
	 */
	let id;
	if (x === undefined || y === undefined) {
		id = 'c';
	} else {
		id = x.toString().concat(';', y.toString());
	}
	
	if (itemType === undefined) {
		itemType = ItemTypes.NULL;
	}
	
	/**
	 * Type est le type de la composante
	 * Item indique les paramètres passés à l'endroit où l'on glisse la composante
	 */
	let dropState = false;
	const [{isDragging, didDrop}, drag] = useDrag(() => ({
		type: itemType,
		item: {itemType: itemType, itemId: id},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
			didDrop: monitor.didDrop()
		})
	}));
	
	if (didDrop === true) {
		dropState = true;
	}
	
	if (!isDragging) {
		return (
			<div className={'composante'} id={id} data-dropstate={dropState}>
				<img src={image} ref={drag} />
			</div>
		);
	}
}

export default Composante;