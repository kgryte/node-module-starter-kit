'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	merge = require( 'utils-merge2' )(),
	validate = require( './validate.js' ),
	defaults = require( './defaults.json' ),
	files = require( './files.js' );


// STARTER //

/**
* FUNCTION: starter( dest[, opts ] )
*	Synchronously runs starter tasks.
*
* @param {String} dest - destination directory
* @param {Object} [opts] - function options
* @param {String} [opts.name=""] - module name
* @param {String} [opts.author=""] - module author
* @param {String} [opts.email=""] - author email
* @param {String} [opts.desc=""] - module description
* @param {String[]} [opts.keywords=[]] - module keywords
* @param {String} [opts.cmd=""] - command
* @param {String} [opts.repo=""] - module Github repository
* @param {String} [opts.license="MIT"] - license
* @param {String} [opts.holder=""] - copyright holder
*/
function starter( dest, options ) {
	var opts = {},
		err,
		i;

	if ( !isString( dest ) ) {
		throw new TypeError( 'starter()::invalid input argument. First argument must be a string primitive. Value: `' + dest + '`.' );
	}
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	opts = merge( {}, defaults, opts );

	for ( i = 0; i < files.length; i++ ) {
		files[ i ]( dest, opts );
	}

	// TODO: directory creation

} // end FUNCTION starter()


// EXPORTS //

module.exports = starter;
