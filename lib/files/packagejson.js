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
		'desc': options.desc,
		'author': options.author,
		'cmd': options.cmd
	};
	if ( options.name ) {
		opts.name = options.name;
	}
	if ( options.repo ) {
		opts.repo = options.repo;
	}
	if ( options.email ) {
		opts.email = options.email;
	}
	if ( options.keywords && options.keywords.length ) {
		opts.keywords = options.keywords;
	}
	if ( clbk ) {
		file( dest, opts, clbk );
	} else {
		file.sync( dest, opts );
	}
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
