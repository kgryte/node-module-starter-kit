'use strict';

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' );


// FILES //

/**
* FUNCTION: files()
*	Returns an array of functions for creating module files.
*
* @return {Function[]} array of file creation functions
*/
function files() {
	var dpath,
		fpath,
		out,
		len,
		ext,
		f, i;

	dpath = path.join( __dirname, 'files' );
	f = fs.readdirSync( dpath );

	len = f.length;
	out = [];
	for ( i = 0; i < len; i++ ) {
		ext = f[ i ].substring( f[i].length-3 );
		if ( ext === '.js' ) {
			fpath = path.join( dpath, f[ i ] );
			out.push( require( fpath ) );
		}
	}
	return out;
} // end FUNCTION files()


// EXPORTS //

module.exports = files();
