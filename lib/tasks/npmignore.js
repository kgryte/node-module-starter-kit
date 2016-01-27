'use strict';

// MODULES //

var file = require( '@kgryte/npmignore' );


// NPMIGNORE //

/**
* FUNCTION: npmignore( logger )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} logger - logger
* @returns {Function}
*/
function npmignore( logger ) {
	var log = logger( 'starter-kit:npmignore' );
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
		log( 'Creating an `.npmignore` file...' );
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
				log( 'Encountered an error when creating an `.npmignore` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created an `.npmignore` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION npmignore()


// EXPORTS //

module.exports = npmignore;
