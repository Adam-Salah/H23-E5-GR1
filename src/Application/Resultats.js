import React from 'react';

/**
 * Boîte qui affiche les résultats des calculs de voltage et courrant
 */
function Resultats({resultats}) {
	return (
		<div className={'resultats'}>
			<h3>Voltage: {resultats.at(0)}</h3>
			<h3>Courrant: {resultats.at(1)}</h3>
		</div>
	);
}

export default Resultats;