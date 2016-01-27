'use strict';

// MODULES //

var path = require( 'path' );
var mkdirp = require( 'mkdirp' );
var file = require( '@kgryte/node-module-snippet' );


// MODULE //

/**
* FUNCTION: lib( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function lib( debug ) {
	var log = debug( 'starter-kit:node-module-snippet' );
	/**
	* FUNCTION: create( dest, opts, clbk )
	*	Creates a file in a specified directory.
	*
	* @param {String} dest - destination directory
	* @param {Object} opts - function options
	* @param {Function} clbk - callback function
	* @returns {Void}
	*/
	return function create( dest, options, clbk ) {
		var opts = {
			'template': 'default'
		};
		log( 'Creating a `lib` directory...' );
		log( 'Destination: %s', dest );

		dest = path.join( dest, 'lib' );
		mkdirp( dest, onDir );

		/**
		* FUNCTION: onDir( error )
		*	Callback invoked after creating a directory.
		*
		* @private
		* @param {Error|Null} error - error
		* @returns {Void}
		*/
		function onDir( error ) {
			if ( error ) {
				log( 'Encountered an error when creating a `lib` directory: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `lib` directory.' );
			log( 'Creating a `module` file...' );
			log( 'Destination: %s', dest );
			log( 'Options: %s', JSON.stringify( opts ) );
			file( dest, opts, done );
		} // end FUNCTION onDir()

		/**
		* FUNCTION: done( [error] )
		*	Callback invoked after creating a file.
		*
		* @private
		* @param {Error} [error] - error
		* @returns {Void}
		*/
		function done( error ) {
			if ( error ) {
				log( 'Encountered an error when creating a `module` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `module` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION lib()


// EXPORTS //

module.exports = lib;