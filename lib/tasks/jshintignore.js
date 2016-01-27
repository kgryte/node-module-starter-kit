'use strict';

// MODULES //

var file = require( '@kgryte/jshintignore' );


// JSHINTIGNORE //

/**
* FUNCTION: jshintignore( debug )
*	Returns a function to create a file in a specified directory.
*
* @param {Function} debug - debug function
* @returns {Function}
*/
function jshintignore( debug ) {
	var log = debug( 'starter-kit:jshintignore' );
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
		log( 'Creating a `.jshintignore` file...' );
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
				log( 'Encountered an error when creating a `.jshintignore` file: %s.', error.message );
				return clbk( error );
			}
			log( 'Successfully created a `.jshintignore` file.' );
			clbk();
		}
	}; // end FUNCTION create()
} // end FUNCTION jshintignore()


// EXPORTS //

module.exports = jshintignore;
