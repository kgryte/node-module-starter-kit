'use strict';

// MODULES //

var path = require( 'path' );
var mkdirp = require( 'mkdirp' );
var file = require( '@kgryte/examples-snippet' );


// EXAMPLE //

/**
* FUNCTION: example( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function example( debug ) {
	var log = debug( 'starter-kit:example-snippet' );
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
			'template': 'nodejs'
		};
		log( 'Creating an `examples` directory...' );
		log( 'Destination: %s', dest );

		dest = path.join( dest, 'examples' );
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
				log( 'Encountered an error when creating an `examples` directory: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created an `examples` directory.' );
			log( 'Creating an `example` file...' );
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
				log( 'Encountered an error when creating an `example` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created an `example` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION example()


// EXPORTS //

module.exports = example;