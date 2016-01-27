'use strict';

// MODULES //

var file = require( '@kgryte/makefile' );


// MAKEFILE //

/**
* FUNCTION: makefile( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function makefile( debug ) {
	var log = debug( 'starter-kit:makefile' );
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
		// TODO: specify template according to whether a module is browser compatible and whether proxyquire is needed
		
		log( 'Creating a `Makefile`...' );
		log( 'Destination: %s', dest );
		log( 'Options: %s', JSON.stringify( opts ) );
		file( dest, opts, done );

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
				log( 'Encountered an error when creating a `Makefile`: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `Makefile`.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION makefile()


// EXPORTS //

module.exports = makefile;
