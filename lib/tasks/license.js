'use strict';

// MODULES //

var file = require( '@kgryte/license' );


// LICENSE //

/**
* FUNCTION: license( logger )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} logger - logger
* @returns {Function}
*/
function license( logger ) {
	var log = logger( 'starter-kit:license' );
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
			'template': options.license,
			'holder': options.holder
		};
		log( 'Creating a `LICENSE` file...' );
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
				log( 'Encountered an error when creating a `LICENSE` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `LICENSE` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION license()


// EXPORTS //

module.exports = license;
