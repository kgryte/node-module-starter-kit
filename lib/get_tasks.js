'use strict';

// MODULES //

var TASKS = require( './tasks' );


// TASKS //

/**
* FUNCTION: tasks( logger )
*	Returns a task array.
*
* @param {Function} logger - logger
* @returns {Array[]} task array
*/
function tasks( logger ) {
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
} // end FUNCTION tasks()


// EXPORTS //

module.exports = tasks;
