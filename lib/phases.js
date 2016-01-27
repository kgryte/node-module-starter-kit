'use strict';

// MODULES //

var TASKS = require( './tasks.js' );


// PHASES //

/**
* FUNCTION: phases( logger )
*	Returns a phase array.
*
* @param {Function} logger - logger
* @returns {Array[]} phase array
*/
function phases( logger ) {
	var out;
	var tmp;
	var len;
	var t;
	var i;
	var j;

	out = new Array( TASKS.length );
	for ( i = 0; i < TASKS.length; i++ ) {
		t = TASKS[ i ];
		len = t.length;
		tmp = new Array( len );
		for ( j = 0; j < len; j++ ) {
			tmp[ j ] = t[ j ]( logger );
		}
		out[ i ] = tmp;
	}
	return out;
} // end FUNCTION phases()


// EXPORTS //

module.exports = phases;