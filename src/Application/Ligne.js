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
	let rotation = Math.atan(height / width) * 180 / Math.PI;
	
	return (
		<line className={'ligne'} style={
			{width: length, transform: `rotate(${rotation}deg)`, transformOrigin: 'bottom left'}
		} />
	);
	
}

export default Ligne;