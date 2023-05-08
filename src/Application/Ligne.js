import React from 'react';

function Ligne({from, to}) {
	
	let eleFrom = document.getElementById(from);
	let eleTo = document.getElementById(to);
	
	let eleFromX = eleFrom.getBoundingClientRect().x;
	let eleFromY = eleFrom.getBoundingClientRect().y;
	let eleToX = eleTo.getBoundingClientRect().x;
	let eleToY = eleTo.getBoundingClientRect().y;
	
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
				top: eleFromY - 50,
				left: eleFromX + 50,
				width: length,
				transform: 'rotate('+rotation+'deg)',
				transformOrigin: 'top left',
				border: '1px solid black'
			}
		} />
	);
	
}

export default Ligne;