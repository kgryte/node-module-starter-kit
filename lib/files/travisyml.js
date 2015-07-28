'use strict';

// MODULES //

var file = require( '@kgryte/travis-yml' );


// CREATE //

/**
* FUNCTION: create( dest, opts[, clbk] )
*	Creates a file in a specified directory.
*
* @param {String} dest - destination directory
* @param {Object} opts - function options
* @param {Function} [clbk] - callback function
*/
function create( dest, options, clbk ) {
	var opts = {
		'template': 'nodejs'
	};
	if ( clbk ) {
		file( dest, opts, clbk );
	} else {
		file.sync( dest, opts );
	}
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
