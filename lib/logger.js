'use strict';

// MODULES //

var noop = require( '@kgryte/noop' );


// LOGGER //

/**
* FUNCTION: logger()
*	Returns a no-op logger.
*
* @returns {Function} no-op
*/
function logger() {
	return noop;
} // end FUNCTION logger()


// EXPORTS //

module.exports = logger;