'use strict';

// MODULES //

var TASKS = require( './tasks' );


// TASKS //

/**
* FUNCTION: tasks( debug )
*	Returns a task array.
*
* @param {Function} debug - debug function
* @returns {Array[]} task array
*/
function tasks( debug ) {
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
			tmp[ j ] = t[ j ]( debug );
		}
		out[ i ] = tmp;
	}
	return out;
} // end FUNCTION tasks()


// EXPORTS //

module.exports = tasks;
