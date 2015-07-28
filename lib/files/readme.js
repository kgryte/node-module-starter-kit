'use strict';

// MODULES //

var file = require( '@kgryte/readme' );


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
		'template': 'node_module',
		'title': options.name,
		'desc': options.desc,
		'repo': options.repo,
		'license': options.license,
		'holder': options.holder
	};
	if ( clbk ) {
		file( dest, opts, clbk );
	} else {
		file.sync( dest, opts );
	}
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
