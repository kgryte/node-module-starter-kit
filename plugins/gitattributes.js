'use strict';

// MODULES //

var file = require( '@kgryte/gitattributes' );


// GITATTRIBUTES //

/**
* FUNCTION: gitattributes( logger )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} logger - logger
* @returns {Function}
*/
function gitattributes( logger ) {
	var log = logger( 'starter-kit:gitattributes' );
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
		log( 'Creating a `.gitattributes` file...' );
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
				log( 'Encountered an error when creating a `.gitattributes` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `.gitattributes` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION gitattributes()


// EXPORTS //

module.exports = gitattributes;
