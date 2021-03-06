'use strict';

// MODULES //

var path = require( 'path' );
var mkdirp = require( 'mkdirp' );
var file = require( '@kgryte/test-snippet' );


// TEST //

/**
* FUNCTION: test( logger )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} logger - logger
* @returns {Function}
*/
function test( logger ) {
	var log = logger( 'starter-kit:test-snippet' );
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
			'template': 'tape'
		};
		log( 'Creating a `test` directory...' );
		log( 'Destination: %s', dest );

		dest = path.join( dest, 'test' );
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
				log( 'Encountered an error when creating a `test` directory: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `test` directory.' );
			log( 'Creating a `test` file...' );
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
				log( 'Encountered an error when creating a `test` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `test` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION test()


// EXPORTS //

module.exports = test;