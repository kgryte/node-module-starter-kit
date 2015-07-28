'use strict';

// MODULES //

var file = require( '@kgryte/package-json' );


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
		'template': 'default',
		'name': options.name,
		'desc': options.desc,
		'repo': options.repo,
		'keywords': options.keywords,
		'author': options.author,
		'email': options.email,
		'cmd': options.cmd
	};
	if ( clbk ) {
		file( dest, opts, clbk );
	} else {
		file.sync( dest, opts );
	}
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
