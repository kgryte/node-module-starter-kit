'use strict';

// MODULES //

var TASKS = require( './tasks' );


// TASKS //

/**
* FUNCTION: tasks( debug )
*	Returns a task array.
*
* @param {Function} debug - debug function
* @returns {Function[]} task array
*/
function tasks( debug ) {
	var out;
	var i;
	out = new Array( TASKS.length );
	for ( i = 0; i < TASKS.length; i++ ) {
		out[ i ] = TASKS[ i ]( debug );
	}
	return out;
} // end FUNCTION tasks()


// EXPORTS //

module.exports = tasks;
