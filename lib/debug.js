'use strict';

// MODULES //

var noop = require( '@kgryte/noop' );


// DEBUG //

/**
* FUNCTION: debug()
*	Returns a mock debug instance.
*
* @returns {Function} noop
*/
function debug() {
	return noop;
} // end FUNCTION debug()


// EXPORTS //

module.exports = debug;