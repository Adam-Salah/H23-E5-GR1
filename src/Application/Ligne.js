import React from 'react';

function Ligne({from, to}) {
	
	/**
	 * Coordonées de départ et fin de la ligne
	 */
	let eleFromX = Number(from.charAt(0)) * 150
	let eleFromY = Number(from.charAt(2)) * 150
	let eleToX = Number(to.charAt(0)) * 150
	let eleToY = Number(to.charAt(2)) * 150
	
	/**
	 * Calcul de triangle de pythagore + trigonométrie pour trouver la rotation et taille.
	 */
	let width = eleToX - eleFromX;
	let height = eleToY - eleFromY;
	let length = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
	let direction = 0
	if (eleToX - eleFromX < 0) direction = 180
	let rotation = direction +  Math.atan(height / width) * 180 / Math.PI;
	
	return (
		<div className={'ligne'} style={
			{
				position: 'absolute',
				top: eleFromY + 55,
				left: eleFromX + 95,
				width: length,
				transform: 'rotate('+rotation+'deg)',
				transformOrigin: 'top left',
				border: '1px solid red'
			}
		} />
	);
	
}

export default Ligne;